import React, { useState, useEffect } from "react";
import Header from "./Header";
import Editor from "./Editor";
import JSZip from "jszip";

function App() {
    const [htmlCode, setHtmlCode] = useState(
    localStorage.getItem("htmlCode") || ""
    );
    const [cssCode, setCssCode] = useState(localStorage.getItem("cssCode") || "");
    const [jsCode, setJsCode] = useState(localStorage.getItem("jsCode") || "");
    const [srcDoc, setSrcDoc] = useState("");

    const handleRun = () => {
        const newSrcDoc = `
            <html>
                <body>${htmlCode}</body>
                <style>${cssCode}</style>
                <script>${jsCode}</script>
            </html>
            `;
        setSrcDoc(newSrcDoc);
    };

    const handleReset = () => {
        if (
        confirm(
            "Are you sure you want to reset all code? This will clear your work."
        )
        ) {
        setHtmlCode("");
        setCssCode("");
        setJsCode("");
        setSrcDoc("");
        }
    };

    const handleDownload = () => {
        if (!JSZip) {
        alert("JSZip library not found. Please ensure it's loaded.");
        return;
        }
        const zip = new JSZip();

        zip.file("index.html", htmlCode);
        zip.file("style.css", cssCode);
        zip.file("script.js", jsCode);

        zip.generateAsync({ type: "blob" }).then(function (content) {
        const url = URL.createObjectURL(content);
        const link = document.createElement("a");
        link.href = url;
        link.download = "codepodium-export.zip";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
        });
    };

    useEffect(() => {
        const handleKeyDown = (event) => {
        if ((event.ctrlKey || event.metaKey) && event.key === "s") {
            event.preventDefault();
            // console.log("Ctrl+S detected!");
            handleRun();
        }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    return (
        <>
        <Header run={handleRun} reset={handleReset} download={handleDownload} />
        <Editor
            htmlCode={htmlCode}
            setHtmlCode={setHtmlCode}
            cssCode={cssCode}
            setCssCode={setCssCode}
            jsCode={jsCode}
            setJsCode={setJsCode}
            srcDoc={srcDoc}
            setSrcDoc={setSrcDoc}
        />
        </>
    );
    }

export default App;

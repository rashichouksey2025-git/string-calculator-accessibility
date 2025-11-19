"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const stringCalculator_1 = require("./Component/stringCalculator");
const App = () => {
    const [input, setInput] = (0, react_1.useState)('');
    const [result, setResult] = (0, react_1.useState)(null);
    const [error, setError] = (0, react_1.useState)('');
    const textareaRef = (0, react_1.useRef)(null);
    const resultRef = (0, react_1.useRef)(null);
    const handleCalculate = () => {
        if (!input.trim()) {
            setError('Please enter some numbers.');
            setResult(null);
            setInput('');
            return;
        }
        const sum = (0, stringCalculator_1.calculateSum)(input);
        if (sum === null) {
            setError('Please enter valid numbers.');
            setResult(null);
            setInput('');
            return;
        }
        setError('');
        setResult(sum);
        setInput('');
    };
    // ⭐ When result changes → Move focus to RESULT
    (0, react_1.useEffect)(() => {
        if (result !== null && resultRef.current) {
            resultRef.current.focus();
        }
    }, [result]);
    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleCalculate();
        }
    };
    const handleSkipToMain = (e) => {
        var _a;
        e.preventDefault();
        (_a = textareaRef.current) === null || _a === void 0 ? void 0 : _a.focus();
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: "container", children: [(0, jsx_runtime_1.jsx)("a", { href: "#mainContent", className: "skip-link", tabIndex: 0, onClick: handleSkipToMain, children: "Skip to main content" }), (0, jsx_runtime_1.jsxs)("header", { role: "banner", children: [(0, jsx_runtime_1.jsx)("img", { src: "https://images.unsplash.com/photo-1594352161389-11756265d1b5?q=80&w=2574&auto=format&fit=crop", width: 600, height: 400, alt: "Decorative abstract colors", tabIndex: 0 }), (0, jsx_runtime_1.jsx)("h1", { tabIndex: 0, children: "String Calculator" })] }), (0, jsx_runtime_1.jsxs)("main", { id: "mainContent", role: "main", children: [(0, jsx_runtime_1.jsx)("label", { htmlFor: "numbersInput", children: "Enter numbers (comma or space separated):" }), (0, jsx_runtime_1.jsx)("textarea", { id: "numbersInput", ref: textareaRef, placeholder: "Enter numbers (comma or space separated)", value: input, onChange: (e) => setInput(e.target.value), "aria-label": "Enter numbers for calculation", "aria-invalid": error ? 'true' : 'false', onKeyDown: handleKeyPress }), (0, jsx_runtime_1.jsx)("button", { onClick: handleCalculate, children: "Calculate" }), result !== null && ((0, jsx_runtime_1.jsxs)("p", { className: "result", "aria-live": "polite", tabIndex: 0, ref: resultRef, children: ["Result: ", result] })), error && ((0, jsx_runtime_1.jsx)("div", { role: "alert", className: "error", tabIndex: 0, children: error })), (0, jsx_runtime_1.jsx)("div", { role: "status", "aria-live": "polite", tabIndex: 0, children: (0, jsx_runtime_1.jsx)("p", { children: "Make sure you enter numbers correctly!" }) })] })] }));
};
exports.default = App;

(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/animations/Parallax.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Parallax",
    ()=>Parallax
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$usePointerField$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/usePointerField.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function Parallax({ children, strength = 12, invert = false, className }) {
    _s();
    const { x, y, enabled } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$usePointerField$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePointerField"])();
    const range = invert ? [
        strength,
        -strength
    ] : [
        -strength,
        strength
    ];
    const tx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(x, [
        0,
        1
    ], range);
    const ty = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(y, [
        0,
        1
    ], range);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        style: enabled ? {
            x: tx,
            y: ty
        } : undefined,
        className: className,
        children: children
    }, void 0, false, {
        fileName: "[project]/components/animations/Parallax.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
_s(Parallax, "yF134zsKA2YgpBvAjUlp6N5t4d0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$usePointerField$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePointerField"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"]
    ];
});
_c = Parallax;
var _c;
__turbopack_context__.k.register(_c, "Parallax");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/landing/AmbientBackground.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AmbientBackground",
    ()=>AmbientBackground
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$animations$2f$Parallax$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/animations/Parallax.tsx [app-client] (ecmascript)");
"use client";
;
;
;
function AmbientBackground({ active }) {
    const litUp = active;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute inset-0 overflow-hidden bg-[var(--bg-stage)]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$animations$2f$Parallax$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Parallax"], {
                strength: 18,
                className: "absolute inset-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "absolute left-1/2 top-[42%] h-[65vh] w-[65vh] -translate-x-1/2 -translate-y-1/2 rounded-full",
                    style: {
                        background: "radial-gradient(circle, color-mix(in srgb, var(--color-teal-500) 13%, transparent) 0%, transparent 70%)"
                    },
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: litUp ? [
                            0.45,
                            0.85,
                            0.45
                        ] : 0,
                        x: [
                            "-4%",
                            "4%",
                            "-4%"
                        ]
                    },
                    transition: {
                        opacity: {
                            duration: 1.8,
                            ease: [
                                0.16,
                                1,
                                0.3,
                                1
                            ]
                        },
                        x: {
                            duration: 23,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }
                    }
                }, void 0, false, {
                    fileName: "[project]/components/landing/AmbientBackground.tsx",
                    lineNumber: 21,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/landing/AmbientBackground.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$animations$2f$Parallax$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Parallax"], {
                strength: 14,
                invert: true,
                className: "absolute inset-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "absolute left-[32%] top-[55%] h-[42vh] w-[42vh] -translate-x-1/2 -translate-y-1/2 rounded-full",
                    style: {
                        background: "radial-gradient(circle, color-mix(in srgb, var(--color-cyan-500) 10%, transparent) 0%, transparent 70%)"
                    },
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: litUp ? [
                            0.3,
                            0.6,
                            0.3
                        ] : 0,
                        y: [
                            "-5%",
                            "5%",
                            "-5%"
                        ]
                    },
                    transition: {
                        opacity: {
                            duration: 2,
                            ease: [
                                0.16,
                                1,
                                0.3,
                                1
                            ],
                            delay: 0.3
                        },
                        y: {
                            duration: 29,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }
                    }
                }, void 0, false, {
                    fileName: "[project]/components/landing/AmbientBackground.tsx",
                    lineNumber: 41,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/landing/AmbientBackground.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "absolute right-[26%] top-[38%] h-[36vh] w-[36vh] rounded-full",
                style: {
                    background: "radial-gradient(circle, color-mix(in srgb, var(--color-emerald-500) 7%, transparent) 0%, transparent 70%)"
                },
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: litUp ? [
                        0.2,
                        0.45,
                        0.2
                    ] : 0
                },
                transition: {
                    duration: 19,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1.1
                }
            }, void 0, false, {
                fileName: "[project]/components/landing/AmbientBackground.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-noise"
            }, void 0, false, {
                fileName: "[project]/components/landing/AmbientBackground.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0",
                style: {
                    background: "radial-gradient(ellipse 78% 60% at 50% 44%, transparent 35%, var(--bg-stage) 100%)"
                }
            }, void 0, false, {
                fileName: "[project]/components/landing/AmbientBackground.tsx",
                lineNumber: 73,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/landing/AmbientBackground.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
_c = AmbientBackground;
var _c;
__turbopack_context__.k.register(_c, "AmbientBackground");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/landing/AmbientParticles.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AmbientParticles",
    ()=>AmbientParticles
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useHasMounted$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useHasMounted.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useMediaQuery$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useMediaQuery.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$usePrefersReducedMotion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/usePrefersReducedMotion.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
/** Deterministic pseudo-random in [0,1), seeded by index — never Math.random(). */ function seeded(i) {
    const v = Math.sin(i * 12.9898) * 43758.5453;
    return v - Math.floor(v);
}
function AmbientParticles({ show }) {
    _s();
    const mounted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useHasMounted$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHasMounted"])();
    const isMobile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useMediaQuery$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsMobile"])();
    const reducedMotion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$usePrefersReducedMotion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePrefersReducedMotion"])();
    const particles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AmbientParticles.useMemo[particles]": ()=>Array.from({
                length: 14
            }, {
                "AmbientParticles.useMemo[particles]": (_, i)=>({
                        left: `${(seeded(i) * 100).toFixed(1)}%`,
                        top: `${(seeded(i + 50) * 100).toFixed(1)}%`,
                        size: 1 + seeded(i + 100) * 1.5,
                        duration: 26 + seeded(i + 150) * 18,
                        delay: seeded(i + 200) * 8
                    })
            }["AmbientParticles.useMemo[particles]"])
    }["AmbientParticles.useMemo[particles]"], []);
    if (!mounted || isMobile || reducedMotion) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "pointer-events-none absolute inset-0 overflow-hidden",
        children: particles.map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                className: "absolute rounded-full bg-[var(--color-fog-100)]",
                style: {
                    left: p.left,
                    top: p.top,
                    width: p.size,
                    height: p.size
                },
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: show ? [
                        0,
                        0.28,
                        0.1,
                        0.28,
                        0
                    ] : 0,
                    y: [
                        0,
                        -16,
                        0
                    ]
                },
                transition: {
                    duration: p.duration,
                    delay: p.delay,
                    repeat: Infinity,
                    ease: "easeInOut"
                }
            }, i, false, {
                fileName: "[project]/components/landing/AmbientParticles.tsx",
                lineNumber: 45,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/landing/AmbientParticles.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_s(AmbientParticles, "GZBeT+YvLWzN0IqcBKTEDsXQAl0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useHasMounted$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHasMounted"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useMediaQuery$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsMobile"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$usePrefersReducedMotion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePrefersReducedMotion"]
    ];
});
_c = AmbientParticles;
var _c;
__turbopack_context__.k.register(_c, "AmbientParticles");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/landing/BrandReveal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BrandReveal",
    ()=>BrandReveal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$usePrefersReducedMotion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/usePrefersReducedMotion.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function BrandReveal({ show }) {
    _s();
    const reducedMotion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$usePrefersReducedMotion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePrefersReducedMotion"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center text-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h1, {
                        initial: {
                            opacity: 0,
                            y: 20,
                            filter: "blur(10px)",
                            letterSpacing: "0.12em"
                        },
                        animate: show ? {
                            opacity: 1,
                            y: 0,
                            filter: "blur(0px)",
                            letterSpacing: "-0.02em"
                        } : {
                            opacity: 0,
                            y: 20,
                            filter: "blur(10px)",
                            letterSpacing: "0.12em"
                        },
                        transition: {
                            duration: 1.3,
                            ease: [
                                0.16,
                                1,
                                0.3,
                                1
                            ]
                        },
                        className: "font-[family-name:var(--font-display)] text-[clamp(3rem,9vw,6.5rem)] font-semibold leading-[0.95] text-[var(--text-primary)]",
                        children: "ReNova OS"
                    }, void 0, false, {
                        fileName: "[project]/components/landing/BrandReveal.tsx",
                        lineNumber: 18,
                        columnNumber: 9
                    }, this),
                    !reducedMotion && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "pointer-events-none absolute inset-0",
                        initial: {
                            x: "-120%"
                        },
                        animate: {
                            x: show ? "120%" : "-120%"
                        },
                        transition: {
                            duration: 1.3,
                            delay: show ? 0.9 : 0,
                            ease: [
                                0.65,
                                0,
                                0.35,
                                1
                            ]
                        },
                        style: {
                            background: "linear-gradient(100deg, transparent 40%, color-mix(in srgb, var(--color-off-white) 55%, transparent) 50%, transparent 60%)",
                            mixBlendMode: "overlay"
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/landing/BrandReveal.tsx",
                        lineNumber: 32,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/landing/BrandReveal.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                initial: {
                    opacity: 0,
                    y: 10
                },
                animate: {
                    opacity: show ? 1 : 0,
                    y: show ? 0 : 10
                },
                transition: {
                    duration: 0.8,
                    delay: 0.35,
                    ease: [
                        0.16,
                        1,
                        0.3,
                        1
                    ]
                },
                className: "mt-5 max-w-md text-balance text-[14px] leading-relaxed text-[var(--text-secondary)] md:text-[15px]",
                children: "The intelligent operating system for rehabilitation & reintegration."
            }, void 0, false, {
                fileName: "[project]/components/landing/BrandReveal.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/landing/BrandReveal.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
_s(BrandReveal, "MQhwWx22ofJm/oN8X4ZgCkxD48I=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$usePrefersReducedMotion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePrefersReducedMotion"]
    ];
});
_c = BrandReveal;
var _c;
__turbopack_context__.k.register(_c, "BrandReveal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/landing/CinematicIntro.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CinematicIntro",
    ()=>CinematicIntro
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$landing$2f$AmbientBackground$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/landing/AmbientBackground.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$landing$2f$PrecisionGrid$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/landing/PrecisionGrid.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$landing$2f$AmbientParticles$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/landing/AmbientParticles.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$landing$2f$HolographicCore$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/landing/HolographicCore.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$landing$2f$FocusLight$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/landing/FocusLight.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$landing$2f$SystemStatus$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/landing/SystemStatus.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$landing$2f$BrandReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/landing/BrandReveal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$landing$2f$EnterButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/landing/EnterButton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$landing$2f$OSLaunchTransition$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/landing/OSLaunchTransition.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$providers$2f$PointerFieldProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/providers/PointerFieldProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$usePrefersReducedMotion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/usePrefersReducedMotion.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$session$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/session.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
/** First-ever visit this session: the full ~6s "waking up" sequence. */ const FULL_TIMELINE = {
    ambient: 350,
    grid: 1000,
    core: 1800,
    brand: 3100,
    online: 3500,
    ready: 5100
};
/** Already visited this session: a much quicker, still-legible boot. */ const FAST_TIMELINE = {
    ambient: 60,
    grid: 180,
    core: 340,
    brand: 600,
    online: 680,
    ready: 1000
};
/** prefers-reduced-motion: near-instant, simple fades, no one made to wait. */ const REDUCED_TIMELINE = {
    ambient: 0,
    grid: 0,
    core: 40,
    brand: 100,
    online: 120,
    ready: 220
};
/**
 * CinematicIntro — orchestrates the entire boot sequence described in
 * the Phase 2 brief. Owns exactly one thing: timing. Every visual
 * layer is a separate component that just reacts to boolean/stage
 * props — this file has no rendering logic of its own beyond
 * composing them.
 */ const subscribeNever = ()=>()=>{};
const getServerFalse = ()=>false;
function CinematicIntro() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const reducedMotion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$usePrefersReducedMotion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePrefersReducedMotion"])();
    const visited = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"])(subscribeNever, {
        "CinematicIntro.useSyncExternalStore[visited]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$session$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSessionFlag"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$session$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SESSION_KEYS"].visited)
    }["CinematicIntro.useSyncExternalStore[visited]"], getServerFalse);
    const timeline = reducedMotion ? REDUCED_TIMELINE : visited ? FAST_TIMELINE : FULL_TIMELINE;
    // The core's own internal per-layer entrance delays are tuned for the
    // full ~6s cinematic boot. Under the fast/reduced timelines, showCore
    // flips true almost immediately — without this, the core would still
    // take its own ~2.2s to finish assembling regardless, defeating the
    // point of a fast boot. Scale those delays down to match.
    const coreSpeed = timeline === FULL_TIMELINE ? 1 : 0.15;
    const [showAmbient, setShowAmbient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showGrid, setShowGrid] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showCore, setShowCore] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showBrand, setShowBrand] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showCta, setShowCta] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("initializing");
    const [launching, setLaunching] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const ctaRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CinematicIntro.useEffect": ()=>{
            const timers = [
                setTimeout({
                    "CinematicIntro.useEffect": ()=>setShowAmbient(true)
                }["CinematicIntro.useEffect"], timeline.ambient),
                setTimeout({
                    "CinematicIntro.useEffect": ()=>setShowGrid(true)
                }["CinematicIntro.useEffect"], timeline.grid),
                setTimeout({
                    "CinematicIntro.useEffect": ()=>setShowCore(true)
                }["CinematicIntro.useEffect"], timeline.core),
                setTimeout({
                    "CinematicIntro.useEffect": ()=>setShowBrand(true)
                }["CinematicIntro.useEffect"], timeline.brand),
                setTimeout({
                    "CinematicIntro.useEffect": ()=>setStatus("online")
                }["CinematicIntro.useEffect"], timeline.online),
                setTimeout({
                    "CinematicIntro.useEffect": ()=>{
                        setStatus("ready");
                        setShowCta(true);
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$session$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setSessionFlag"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$session$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SESSION_KEYS"].visited);
                    }
                }["CinematicIntro.useEffect"], timeline.ready)
            ];
            return ({
                "CinematicIntro.useEffect": ()=>timers.forEach(clearTimeout)
            })["CinematicIntro.useEffect"];
        }
    }["CinematicIntro.useEffect"], [
        timeline
    ]);
    // Accessibility: lets keyboard/screen-reader users skip straight to
    // the CTA instead of waiting on a purely decorative sequence.
    const skipIntro = ()=>{
        setShowAmbient(true);
        setShowGrid(true);
        setShowCore(true);
        setShowBrand(true);
        setStatus("ready");
        setShowCta(true);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$session$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setSessionFlag"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$session$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SESSION_KEYS"].visited);
        requestAnimationFrame(()=>ctaRef.current?.focus());
    };
    const handleEnter = ()=>{
        setLaunching(true);
    };
    const handleCovered = ()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$session$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setSessionFlag"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$session$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SESSION_KEYS"].launching);
        router.push("/overview");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$providers$2f$PointerFieldProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PointerFieldProvider"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden px-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: skipIntro,
                        className: "absolute left-4 top-4 z-50 -translate-y-16 rounded-[var(--radius-sm)] bg-[var(--bg-surface)] px-4 py-2 text-[13px] text-[var(--text-primary)] transition-transform focus:translate-y-0",
                        children: "Skip intro"
                    }, void 0, false, {
                        fileName: "[project]/components/landing/CinematicIntro.tsx",
                        lineNumber: 135,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$landing$2f$AmbientBackground$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AmbientBackground"], {
                        active: showAmbient
                    }, void 0, false, {
                        fileName: "[project]/components/landing/CinematicIntro.tsx",
                        lineNumber: 143,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$landing$2f$PrecisionGrid$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PrecisionGrid"], {
                        show: showGrid
                    }, void 0, false, {
                        fileName: "[project]/components/landing/CinematicIntro.tsx",
                        lineNumber: 144,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$landing$2f$AmbientParticles$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AmbientParticles"], {
                        show: showCore
                    }, void 0, false, {
                        fileName: "[project]/components/landing/CinematicIntro.tsx",
                        lineNumber: 145,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$landing$2f$FocusLight$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FocusLight"], {}, void 0, false, {
                        fileName: "[project]/components/landing/CinematicIntro.tsx",
                        lineNumber: 146,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 flex items-center justify-center opacity-90",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$landing$2f$HolographicCore$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HolographicCore"], {
                            show: showCore,
                            size: 620,
                            speed: coreSpeed
                        }, void 0, false, {
                            fileName: "[project]/components/landing/CinematicIntro.tsx",
                            lineNumber: 149,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/landing/CinematicIntro.tsx",
                        lineNumber: 148,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-10 flex flex-col items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    y: 8
                                },
                                animate: {
                                    opacity: showCore ? 1 : 0,
                                    y: showCore ? 0 : 8
                                },
                                transition: {
                                    duration: 0.7,
                                    ease: [
                                        0.16,
                                        1,
                                        0.3,
                                        1
                                    ]
                                },
                                className: "mb-6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$landing$2f$SystemStatus$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SystemStatus"], {
                                    stage: status,
                                    show: showCore
                                }, void 0, false, {
                                    fileName: "[project]/components/landing/CinematicIntro.tsx",
                                    lineNumber: 159,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/landing/CinematicIntro.tsx",
                                lineNumber: 153,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$landing$2f$BrandReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BrandReveal"], {
                                show: showBrand
                            }, void 0, false, {
                                fileName: "[project]/components/landing/CinematicIntro.tsx",
                                lineNumber: 162,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-10",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$landing$2f$EnterButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EnterButton"], {
                                    ref: ctaRef,
                                    onClick: handleEnter,
                                    show: showCta
                                }, void 0, false, {
                                    fileName: "[project]/components/landing/CinematicIntro.tsx",
                                    lineNumber: 165,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/landing/CinematicIntro.tsx",
                                lineNumber: 164,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/landing/CinematicIntro.tsx",
                        lineNumber: 152,
                        columnNumber: 9
                    }, this),
                    showCta && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        transition: {
                            duration: 1,
                            delay: 0.6
                        },
                        className: "absolute bottom-9 flex flex-col items-center gap-2 text-[11px] font-mono uppercase tracking-[0.18em] text-[var(--text-muted)]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Scroll"
                            }, void 0, false, {
                                fileName: "[project]/components/landing/CinematicIntro.tsx",
                                lineNumber: 176,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                className: "h-8 w-px bg-[var(--border-hairline-strong)]",
                                animate: {
                                    scaleY: [
                                        0.3,
                                        1,
                                        0.3
                                    ],
                                    opacity: [
                                        0.3,
                                        1,
                                        0.3
                                    ]
                                },
                                transition: {
                                    duration: 2.4,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                },
                                style: {
                                    transformOrigin: "top"
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/landing/CinematicIntro.tsx",
                                lineNumber: 177,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/landing/CinematicIntro.tsx",
                        lineNumber: 170,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/landing/CinematicIntro.tsx",
                lineNumber: 134,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$landing$2f$OSLaunchTransition$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OSLaunchTransition"], {
                active: launching,
                onCovered: handleCovered
            }, void 0, false, {
                fileName: "[project]/components/landing/CinematicIntro.tsx",
                lineNumber: 187,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/landing/CinematicIntro.tsx",
        lineNumber: 133,
        columnNumber: 5
    }, this);
}
_s(CinematicIntro, "JVtqtswAmm/mzSvNI8V6s8zQbT0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$usePrefersReducedMotion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePrefersReducedMotion"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"]
    ];
});
_c = CinematicIntro;
var _c;
__turbopack_context__.k.register(_c, "CinematicIntro");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/landing/EnterButton.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EnterButton",
    ()=>EnterButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-motion-value.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.mjs [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$usePrefersReducedMotion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/usePrefersReducedMotion.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useMediaQuery$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useMediaQuery.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const EnterButton = /*#__PURE__*/ _s((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = _s(({ onClick, show }, ref)=>{
    _s();
    const wrapperRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const reducedMotion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$usePrefersReducedMotion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePrefersReducedMotion"])();
    const coarsePointer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useMediaQuery$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMediaQuery"])("(pointer: coarse)");
    const proximityEnabled = !reducedMotion && !coarsePointer;
    const distance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(9999);
    const glow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(distance, {
        "EnterButton.useTransform[glow]": (d)=>`0 0 ${36}px color-mix(in srgb, var(--color-teal-400) ${Math.max(0, 46 - d / 5)}%, transparent)`
    }["EnterButton.useTransform[glow]"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EnterButton.useEffect": ()=>{
            if (!proximityEnabled) return;
            const onMove = {
                "EnterButton.useEffect.onMove": (e)=>{
                    const rect = wrapperRef.current?.getBoundingClientRect();
                    if (!rect) return;
                    const cx = rect.left + rect.width / 2;
                    const cy = rect.top + rect.height / 2;
                    distance.set(Math.hypot(e.clientX - cx, e.clientY - cy));
                }
            }["EnterButton.useEffect.onMove"];
            window.addEventListener("pointermove", onMove);
            return ({
                "EnterButton.useEffect": ()=>window.removeEventListener("pointermove", onMove)
            })["EnterButton.useEffect"];
        }
    }["EnterButton.useEffect"], [
        proximityEnabled,
        distance
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        ref: wrapperRef,
        initial: {
            opacity: 0,
            y: 12
        },
        animate: {
            opacity: show ? 1 : 0,
            y: show ? 0 : 12
        },
        transition: {
            duration: 0.7,
            ease: [
                0.16,
                1,
                0.3,
                1
            ]
        },
        style: {
            borderRadius: "var(--radius-sm)",
            boxShadow: proximityEnabled ? glow : undefined
        },
        className: "inline-flex",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            ref: ref,
            size: "lg",
            onClick: onClick,
            disabled: !show,
            children: [
                "Enter ReNova OS",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                    size: 16,
                    className: "ml-0.5"
                }, void 0, false, {
                    fileName: "[project]/components/landing/EnterButton.tsx",
                    lineNumber: 55,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/landing/EnterButton.tsx",
            lineNumber: 53,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/landing/EnterButton.tsx",
        lineNumber: 45,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
}, "LCTuWdptGlqAN30SkvDSGNmaCzU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$usePrefersReducedMotion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePrefersReducedMotion"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useMediaQuery$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMediaQuery"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"]
    ];
})), "LCTuWdptGlqAN30SkvDSGNmaCzU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$usePrefersReducedMotion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePrefersReducedMotion"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useMediaQuery$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMediaQuery"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"]
    ];
});
_c1 = EnterButton;
EnterButton.displayName = "EnterButton";
var _c, _c1;
__turbopack_context__.k.register(_c, "EnterButton$forwardRef");
__turbopack_context__.k.register(_c1, "EnterButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/landing/FocusLight.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FocusLight",
    ()=>FocusLight
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-motion-value.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-spring.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$usePrefersReducedMotion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/usePrefersReducedMotion.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useMediaQuery$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useMediaQuery.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function FocusLight() {
    _s();
    const reducedMotion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$usePrefersReducedMotion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePrefersReducedMotion"])();
    const coarsePointer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useMediaQuery$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMediaQuery"])("(pointer: coarse)");
    const disabled = reducedMotion || coarsePointer;
    const rawX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(0);
    const rawY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(0);
    const x = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"])(rawX, {
        damping: 26,
        stiffness: 40,
        mass: 0.6
    });
    const y = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"])(rawY, {
        damping: 26,
        stiffness: 40,
        mass: 0.6
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FocusLight.useEffect": ()=>{
            if (disabled) return;
            rawX.set(window.innerWidth / 2);
            rawY.set(window.innerHeight / 2);
            const onMove = {
                "FocusLight.useEffect.onMove": (e)=>{
                    rawX.set(e.clientX);
                    rawY.set(e.clientY);
                }
            }["FocusLight.useEffect.onMove"];
            window.addEventListener("pointermove", onMove);
            return ({
                "FocusLight.useEffect": ()=>window.removeEventListener("pointermove", onMove)
            })["FocusLight.useEffect"];
        }
    }["FocusLight.useEffect"], [
        disabled,
        rawX,
        rawY
    ]);
    if (disabled) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        "aria-hidden": true,
        className: "pointer-events-none absolute left-0 top-0 h-[600px] w-[600px] rounded-full",
        style: {
            x,
            y,
            translateX: "-50%",
            translateY: "-50%",
            background: "radial-gradient(circle, color-mix(in srgb, var(--color-off-white) 4%, transparent) 0%, transparent 70%)"
        }
    }, void 0, false, {
        fileName: "[project]/components/landing/FocusLight.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, this);
}
_s(FocusLight, "HvyKFFUsELd3/1MzDe9k+MZrjd8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$usePrefersReducedMotion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePrefersReducedMotion"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useMediaQuery$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMediaQuery"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"]
    ];
});
_c = FocusLight;
var _c;
__turbopack_context__.k.register(_c, "FocusLight");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/landing/HolographicCore.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HolographicCore",
    ()=>HolographicCore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$landing$2f$OrbitalRing$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/landing/OrbitalRing.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$usePrefersReducedMotion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/usePrefersReducedMotion.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function HolographicCore({ show, size = 620, speed = 1 }) {
    _s();
    const reducedMotion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$usePrefersReducedMotion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePrefersReducedMotion"])();
    const c = size / 2;
    const d = (seconds)=>seconds * speed;
    const rOuter = size * 0.46;
    const rTicks = size * 0.42;
    const rGrowth = size * 0.37;
    const rStructure = size * 0.33;
    const rMarkers = size * 0.295;
    const rInnerArc = size * 0.26;
    const rCore = size * 0.185;
    const ticks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "HolographicCore.useMemo[ticks]": ()=>Array.from({
                length: 64
            }, {
                "HolographicCore.useMemo[ticks]": (_, i)=>({
                        angle: i / 64 * 360,
                        major: i % 8 === 0
                    })
            }["HolographicCore.useMemo[ticks]"])
    }["HolographicCore.useMemo[ticks]"], []);
    // Growth arc: a deliberately partial ring (~64%) rather than a full
    // circle — "progress that is real but partial," per the file header.
    const growthCircumference = 2 * Math.PI * rGrowth;
    const growthLength = growthCircumference * 0.64;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative",
        style: {
            width: size,
            height: size
        },
        role: "img",
        "aria-label": "ReNova OS holographic core, assembling and coming online",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: `0 0 ${size} ${size}`,
            width: size,
            height: size,
            className: "absolute inset-0",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("radialGradient", {
                            id: "core-glow",
                            cx: "50%",
                            cy: "50%",
                            r: "50%",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "0%",
                                    stopColor: "var(--color-teal-400)",
                                    stopOpacity: "0.5"
                                }, void 0, false, {
                                    fileName: "[project]/components/landing/HolographicCore.tsx",
                                    lineNumber: 72,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "100%",
                                    stopColor: "var(--color-teal-400)",
                                    stopOpacity: "0"
                                }, void 0, false, {
                                    fileName: "[project]/components/landing/HolographicCore.tsx",
                                    lineNumber: 73,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/landing/HolographicCore.tsx",
                            lineNumber: 71,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                            id: "growth-gradient",
                            x1: "0%",
                            y1: "0%",
                            x2: "100%",
                            y2: "100%",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "0%",
                                    stopColor: "var(--color-teal-400)"
                                }, void 0, false, {
                                    fileName: "[project]/components/landing/HolographicCore.tsx",
                                    lineNumber: 76,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "100%",
                                    stopColor: "var(--color-emerald-500)"
                                }, void 0, false, {
                                    fileName: "[project]/components/landing/HolographicCore.tsx",
                                    lineNumber: 77,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/landing/HolographicCore.tsx",
                            lineNumber: 75,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/landing/HolographicCore.tsx",
                    lineNumber: 70,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].circle, {
                    cx: c,
                    cy: c,
                    r: rCore * 0.85,
                    fill: "url(#core-glow)",
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: show ? [
                            0.25,
                            0.5,
                            0.25
                        ] : 0
                    },
                    transition: {
                        duration: 5.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: d(1.8)
                    }
                }, void 0, false, {
                    fileName: "[project]/components/landing/HolographicCore.tsx",
                    lineNumber: 82,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$landing$2f$OrbitalRing$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OrbitalRing"], {
                    center: c,
                    radius: rOuter,
                    show: show,
                    strokeWidth: 1,
                    delay: d(0.1),
                    opacity: 0.55
                }, void 0, false, {
                    fileName: "[project]/components/landing/HolographicCore.tsx",
                    lineNumber: 93,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    children: ticks.map((t, i)=>{
                        const rad = t.angle * Math.PI / 180;
                        const len = t.major ? 13 : 5;
                        const round = (n)=>Math.round(n * 100) / 100;
                        const x1 = round(c + (rTicks - len) * Math.cos(rad));
                        const y1 = round(c + (rTicks - len) * Math.sin(rad));
                        const x2 = round(c + rTicks * Math.cos(rad));
                        const y2 = round(c + rTicks * Math.sin(rad));
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].line, {
                            x1: x1,
                            y1: y1,
                            x2: x2,
                            y2: y2,
                            stroke: t.major ? "var(--color-fog-100)" : "var(--color-slate-500)",
                            strokeWidth: t.major ? 1.5 : 1,
                            strokeLinecap: "round",
                            initial: {
                                opacity: 0,
                                scale: 0.4
                            },
                            animate: {
                                opacity: show ? t.major ? 0.8 : 0.32 : 0,
                                scale: 1
                            },
                            transition: {
                                duration: 0.8,
                                ease: [
                                    0.16,
                                    1,
                                    0.3,
                                    1
                                ],
                                delay: d(0.35 + i % 20 * 0.012)
                            },
                            style: {
                                transformOrigin: `${c}px ${c}px`
                            }
                        }, i, false, {
                            fileName: "[project]/components/landing/HolographicCore.tsx",
                            lineNumber: 106,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/components/landing/HolographicCore.tsx",
                    lineNumber: 96,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].g, {
                    style: {
                        transformOrigin: `${c}px ${c}px`
                    },
                    initial: {
                        opacity: 0,
                        rotate: -20
                    },
                    animate: {
                        opacity: show ? 0.85 : 0,
                        rotate: show && !reducedMotion ? [
                            -3,
                            3,
                            -3
                        ] : 0
                    },
                    transition: {
                        opacity: {
                            duration: 1,
                            delay: d(0.9),
                            ease: [
                                0.16,
                                1,
                                0.3,
                                1
                            ]
                        },
                        rotate: {
                            duration: 18,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: d(0.9)
                        }
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: c,
                        cy: c,
                        r: rGrowth,
                        fill: "none",
                        stroke: "url(#growth-gradient)",
                        strokeWidth: 2,
                        strokeLinecap: "round",
                        strokeDasharray: `${growthLength} ${growthCircumference}`,
                        transform: `rotate(-90 ${c} ${c})`
                    }, void 0, false, {
                        fileName: "[project]/components/landing/HolographicCore.tsx",
                        lineNumber: 141,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/landing/HolographicCore.tsx",
                    lineNumber: 129,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$landing$2f$OrbitalRing$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OrbitalRing"], {
                    center: c,
                    radius: rStructure,
                    show: show,
                    rotateSeconds: 90,
                    direction: 1,
                    strokeWidth: 1.5,
                    strokeDasharray: "3 4 34 4 3 4 80 4",
                    color: "var(--color-cyan-500)",
                    opacity: 0.55,
                    delay: d(1.2)
                }, void 0, false, {
                    fileName: "[project]/components/landing/HolographicCore.tsx",
                    lineNumber: 155,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$landing$2f$OrbitalRing$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OrbitalRing"], {
                    center: c,
                    radius: rMarkers,
                    show: show,
                    rotateSeconds: 34,
                    direction: -1,
                    delay: d(1.5),
                    hideRing: true,
                    markers: [
                        {
                            angle: 40,
                            size: 3
                        },
                        {
                            angle: 200,
                            size: 2
                        }
                    ],
                    markerColor: "var(--color-teal-300)"
                }, void 0, false, {
                    fileName: "[project]/components/landing/HolographicCore.tsx",
                    lineNumber: 169,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$landing$2f$OrbitalRing$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OrbitalRing"], {
                    center: c,
                    radius: rInnerArc,
                    show: show,
                    rotateSeconds: 61,
                    direction: -1,
                    strokeDasharray: "1 5",
                    color: "var(--color-cyan-500)",
                    opacity: 0.4,
                    delay: d(1.7)
                }, void 0, false, {
                    fileName: "[project]/components/landing/HolographicCore.tsx",
                    lineNumber: 182,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].circle, {
                    cx: c,
                    cy: c,
                    r: rCore,
                    fill: "none",
                    stroke: "var(--color-teal-400)",
                    strokeWidth: 1.5,
                    initial: {
                        opacity: 0,
                        scale: 0.5
                    },
                    animate: {
                        opacity: show ? 0.8 : 0,
                        scale: 1
                    },
                    transition: {
                        duration: 1,
                        delay: d(2),
                        ease: [
                            0.16,
                            1,
                            0.3,
                            1
                        ]
                    },
                    style: {
                        transformOrigin: `${c}px ${c}px`
                    }
                }, void 0, false, {
                    fileName: "[project]/components/landing/HolographicCore.tsx",
                    lineNumber: 195,
                    columnNumber: 9
                }, this),
                !reducedMotion && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].line, {
                    x1: c,
                    y1: c,
                    x2: c,
                    y2: c - rTicks,
                    stroke: "var(--color-teal-300)",
                    strokeWidth: 1,
                    strokeLinecap: "round",
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: show ? [
                            0,
                            0.55,
                            0
                        ] : 0,
                        rotate: show ? 360 : 0
                    },
                    transition: {
                        opacity: {
                            duration: 3,
                            repeat: Infinity,
                            repeatDelay: 5,
                            ease: "easeInOut",
                            delay: d(2.6)
                        },
                        rotate: {
                            duration: 3,
                            repeat: Infinity,
                            repeatDelay: 5,
                            ease: "linear",
                            delay: d(2.6)
                        }
                    },
                    style: {
                        transformOrigin: `${c}px ${c}px`
                    }
                }, void 0, false, {
                    fileName: "[project]/components/landing/HolographicCore.tsx",
                    lineNumber: 210,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].circle, {
                    cx: c,
                    cy: c,
                    r: 2.5,
                    fill: "var(--color-off-white)",
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: show ? 1 : 0
                    },
                    transition: {
                        duration: 0.6,
                        delay: d(2.2)
                    }
                }, void 0, false, {
                    fileName: "[project]/components/landing/HolographicCore.tsx",
                    lineNumber: 229,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/landing/HolographicCore.tsx",
            lineNumber: 69,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/landing/HolographicCore.tsx",
        lineNumber: 63,
        columnNumber: 5
    }, this);
}
_s(HolographicCore, "+AbNzsWFq4FJ81RysyTtX2PrIbY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$usePrefersReducedMotion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePrefersReducedMotion"]
    ];
});
_c = HolographicCore;
var _c;
__turbopack_context__.k.register(_c, "HolographicCore");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/landing/OSLaunchTransition.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OSLaunchTransition",
    ()=>OSLaunchTransition
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$usePrefersReducedMotion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/usePrefersReducedMotion.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function OSLaunchTransition({ active, onCovered }) {
    _s();
    const reducedMotion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$usePrefersReducedMotion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePrefersReducedMotion"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: active && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "fixed inset-0 z-[200] overflow-hidden bg-[var(--bg-stage)]",
            initial: {
                opacity: 0
            },
            animate: {
                opacity: 1
            },
            transition: {
                duration: reducedMotion ? 0.15 : 0.7,
                ease: [
                    0.7,
                    0,
                    0.84,
                    0
                ]
            },
            onAnimationComplete: onCovered,
            children: !reducedMotion && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "absolute left-1/2 top-1/2 rounded-full border border-[var(--color-teal-400)]",
                initial: {
                    width: 40,
                    height: 40,
                    opacity: 0.9
                },
                animate: {
                    width: "220vmax",
                    height: "220vmax",
                    opacity: 0
                },
                transition: {
                    duration: 0.9,
                    ease: [
                        0.7,
                        0,
                        0.84,
                        0
                    ]
                },
                style: {
                    x: "-50%",
                    y: "-50%"
                }
            }, void 0, false, {
                fileName: "[project]/components/landing/OSLaunchTransition.tsx",
                lineNumber: 36,
                columnNumber: 13
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/landing/OSLaunchTransition.tsx",
            lineNumber: 28,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/landing/OSLaunchTransition.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
_s(OSLaunchTransition, "MQhwWx22ofJm/oN8X4ZgCkxD48I=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$usePrefersReducedMotion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePrefersReducedMotion"]
    ];
});
_c = OSLaunchTransition;
var _c;
__turbopack_context__.k.register(_c, "OSLaunchTransition");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/landing/OrbitalRing.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OrbitalRing",
    ()=>OrbitalRing
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$usePrefersReducedMotion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/usePrefersReducedMotion.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function OrbitalRing({ center: c, radius: r, show, rotateSeconds, direction = 1, strokeDasharray, strokeWidth = 1, color = "var(--border-hairline-strong)", opacity = 0.7, delay = 0, markers, markerColor, hideRing = false }) {
    _s();
    const reducedMotion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$usePrefersReducedMotion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePrefersReducedMotion"])();
    const shouldRotate = rotateSeconds && !reducedMotion;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].g, {
        style: {
            transformOrigin: `${c}px ${c}px`
        },
        initial: {
            opacity: 0,
            scale: 0.85,
            rotate: direction * -60
        },
        animate: {
            opacity: show ? opacity : 0,
            scale: 1,
            rotate: show && shouldRotate ? direction * 360 : 0
        },
        transition: {
            opacity: {
                duration: 1,
                delay,
                ease: [
                    0.16,
                    1,
                    0.3,
                    1
                ]
            },
            scale: {
                duration: 1,
                delay,
                ease: [
                    0.16,
                    1,
                    0.3,
                    1
                ]
            },
            rotate: shouldRotate ? {
                duration: rotateSeconds,
                repeat: Infinity,
                ease: "linear",
                delay
            } : {
                duration: 0.8,
                delay,
                ease: [
                    0.16,
                    1,
                    0.3,
                    1
                ]
            }
        },
        children: [
            !hideRing && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: c,
                cy: c,
                r: r,
                fill: "none",
                stroke: color,
                strokeWidth: strokeWidth,
                strokeDasharray: strokeDasharray,
                strokeLinecap: "round"
            }, void 0, false, {
                fileName: "[project]/components/landing/OrbitalRing.tsx",
                lineNumber: 74,
                columnNumber: 9
            }, this),
            markers?.map((m, i)=>{
                const rad = m.angle * Math.PI / 180;
                const round = (n)=>Math.round(n * 100) / 100;
                const mx = round(c + r * Math.cos(rad));
                const my = round(c + r * Math.sin(rad));
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: mx,
                    cy: my,
                    r: m.size ?? 2.5,
                    fill: markerColor ?? color
                }, i, false, {
                    fileName: "[project]/components/landing/OrbitalRing.tsx",
                    lineNumber: 91,
                    columnNumber: 11
                }, this);
            })
        ]
    }, void 0, true, {
        fileName: "[project]/components/landing/OrbitalRing.tsx",
        lineNumber: 57,
        columnNumber: 5
    }, this);
}
_s(OrbitalRing, "MQhwWx22ofJm/oN8X4ZgCkxD48I=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$usePrefersReducedMotion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePrefersReducedMotion"]
    ];
});
_c = OrbitalRing;
var _c;
__turbopack_context__.k.register(_c, "OrbitalRing");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/landing/PrecisionGrid.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PrecisionGrid",
    ()=>PrecisionGrid
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$animations$2f$Parallax$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/animations/Parallax.tsx [app-client] (ecmascript)");
"use client";
;
;
;
function PrecisionGrid({ show }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        className: "absolute inset-0 [perspective:1400px]",
        initial: {
            opacity: 0
        },
        animate: {
            opacity: show ? 1 : 0
        },
        transition: {
            duration: 1.6,
            ease: [
                0.16,
                1,
                0.3,
                1
            ]
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$animations$2f$Parallax$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Parallax"], {
            strength: 6,
            className: "absolute inset-0",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-precision-grid opacity-[0.35] [mask-image:radial-gradient(ellipse_55%_55%_at_50%_42%,black,transparent)]",
                style: {
                    transform: "rotateX(3deg)",
                    transformOrigin: "50% 40%"
                }
            }, void 0, false, {
                fileName: "[project]/components/landing/PrecisionGrid.tsx",
                lineNumber: 21,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/landing/PrecisionGrid.tsx",
            lineNumber: 20,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/landing/PrecisionGrid.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
_c = PrecisionGrid;
var _c;
__turbopack_context__.k.register(_c, "PrecisionGrid");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/landing/Principles.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Principles",
    ()=>Principles
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2d$handshake$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HeartHandshake$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart-handshake.mjs [app-client] (ecmascript) <export default as HeartHandshake>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-check.mjs [app-client] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sprout$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sprout$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sprout.mjs [app-client] (ecmascript) <export default as Sprout>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$grid$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutGrid$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layout-grid.mjs [app-client] (ecmascript) <export default as LayoutGrid>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$crosshair$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Crosshair$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/crosshair.mjs [app-client] (ecmascript) <export default as Crosshair>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wind$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wind$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wind.mjs [app-client] (ecmascript) <export default as Wind>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$motion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/motion.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
const principles = [
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2d$handshake$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HeartHandshake$3e$__["HeartHandshake"],
        label: "Hope",
        detail: "Every screen assumes forward motion is possible."
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"],
        label: "Trust",
        detail: "Nothing hidden, nothing overstated. Data reads plainly."
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sprout$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sprout$3e$__["Sprout"],
        label: "Growth",
        detail: "Progress is shown as a path, never a verdict."
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$grid$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutGrid$3e$__["LayoutGrid"],
        label: "Structure",
        detail: "Consistent systems reduce cognitive load for staff and residents alike."
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$crosshair$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Crosshair$3e$__["Crosshair"],
        label: "Precision",
        detail: "Instrument-grade clarity — nothing ambiguous, nothing decorative."
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wind$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wind$3e$__["Wind"],
        label: "Calm",
        detail: "Motion is slow and purposeful. The interface never demands urgency."
    }
];
function Principles() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative bg-[var(--bg-canvas)] px-6 py-28 md:py-36",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-5xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                    initial: {
                        opacity: 0,
                        y: 12
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: true,
                        margin: "-80px"
                    },
                    transition: {
                        duration: 0.6
                    },
                    className: "mb-3 font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--accent-primary)]",
                    children: "Design philosophy"
                }, void 0, false, {
                    fileName: "[project]/components/landing/Principles.tsx",
                    lineNumber: 20,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h2, {
                    initial: {
                        opacity: 0,
                        y: 16
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: true,
                        margin: "-80px"
                    },
                    transition: {
                        duration: 0.7,
                        delay: 0.05
                    },
                    className: "max-w-2xl font-[family-name:var(--font-display)] text-[clamp(1.75rem,3.5vw,2.75rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-[var(--text-primary)]",
                    children: "Technology that assists rehabilitation — never replaces the people doing it."
                }, void 0, false, {
                    fileName: "[project]/components/landing/Principles.tsx",
                    lineNumber: 29,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    variants: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$motion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["staggerContainer"])(0.08, 0.1),
                    initial: "hidden",
                    whileInView: "visible",
                    viewport: {
                        once: true,
                        margin: "-100px"
                    },
                    className: "mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-[var(--radius-lg)] border border-[var(--border-hairline)] bg-[var(--border-hairline)] sm:grid-cols-2 lg:grid-cols-3",
                    children: principles.map(({ icon: Icon, label, detail })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            variants: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$motion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fadeUp"],
                            className: "group bg-[var(--bg-canvas)] p-7 transition-colors duration-300 hover:bg-[var(--bg-surface)]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                    size: 20,
                                    strokeWidth: 1.5,
                                    className: "mb-5 text-[var(--accent-primary)] transition-transform duration-500 group-hover:scale-110"
                                }, void 0, false, {
                                    fileName: "[project]/components/landing/Principles.tsx",
                                    lineNumber: 52,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mb-1.5 font-[family-name:var(--font-display)] text-[15px] font-semibold text-[var(--text-primary)]",
                                    children: label
                                }, void 0, false, {
                                    fileName: "[project]/components/landing/Principles.tsx",
                                    lineNumber: 57,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[13px] leading-relaxed text-[var(--text-secondary)]",
                                    children: detail
                                }, void 0, false, {
                                    fileName: "[project]/components/landing/Principles.tsx",
                                    lineNumber: 60,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, label, true, {
                            fileName: "[project]/components/landing/Principles.tsx",
                            lineNumber: 47,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/landing/Principles.tsx",
                    lineNumber: 39,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/landing/Principles.tsx",
            lineNumber: 19,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/landing/Principles.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
_c = Principles;
var _c;
__turbopack_context__.k.register(_c, "Principles");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/landing/SystemStatus.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SystemStatus",
    ()=>SystemStatus
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
"use client";
;
;
const labels = {
    initializing: "System initializing",
    online: "Rehabilitation intelligence online",
    ready: "System ready"
};
function SystemStatus({ stage, show }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            y: 8
        },
        animate: {
            opacity: show ? 1 : 0,
            y: show ? 0 : 8
        },
        transition: {
            duration: 0.6,
            ease: [
                0.16,
                1,
                0.3,
                1
            ]
        },
        className: "flex items-center gap-2 rounded-full border border-[var(--border-hairline-strong)] bg-[color-mix(in_srgb,var(--bg-stage)_60%,transparent)] px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--text-secondary)] backdrop-blur-sm",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                className: "h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent-primary)]",
                animate: {
                    opacity: [
                        0.5,
                        1,
                        0.5
                    ]
                },
                transition: {
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                }
            }, void 0, false, {
                fileName: "[project]/components/landing/SystemStatus.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "relative inline-grid",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                    mode: "wait",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                        initial: {
                            opacity: 0,
                            y: 4
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        exit: {
                            opacity: 0,
                            y: -4
                        },
                        transition: {
                            duration: 0.35,
                            ease: [
                                0.16,
                                1,
                                0.3,
                                1
                            ]
                        },
                        className: "col-start-1 row-start-1",
                        children: labels[stage]
                    }, stage, false, {
                        fileName: "[project]/components/landing/SystemStatus.tsx",
                        lineNumber: 33,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/landing/SystemStatus.tsx",
                    lineNumber: 32,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/landing/SystemStatus.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/landing/SystemStatus.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_c = SystemStatus;
var _c;
__turbopack_context__.k.register(_c, "SystemStatus");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/providers/PointerFieldProvider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PointerFieldContext",
    ()=>PointerFieldContext,
    "PointerFieldProvider",
    ()=>PointerFieldProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-motion-value.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$usePrefersReducedMotion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/usePrefersReducedMotion.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useMediaQuery$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useMediaQuery.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const PointerFieldContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
function PointerFieldProvider({ children }) {
    _s();
    const x = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(0.5);
    const y = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(0.5);
    const reducedMotion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$usePrefersReducedMotion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePrefersReducedMotion"])();
    const coarsePointer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useMediaQuery$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMediaQuery"])("(pointer: coarse)");
    const enabled = !reducedMotion && !coarsePointer;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PointerFieldProvider.useEffect": ()=>{
            if (!enabled) return;
            const onMove = {
                "PointerFieldProvider.useEffect.onMove": (e)=>{
                    x.set(e.clientX / window.innerWidth);
                    y.set(e.clientY / window.innerHeight);
                }
            }["PointerFieldProvider.useEffect.onMove"];
            window.addEventListener("pointermove", onMove);
            return ({
                "PointerFieldProvider.useEffect": ()=>window.removeEventListener("pointermove", onMove)
            })["PointerFieldProvider.useEffect"];
        }
    }["PointerFieldProvider.useEffect"], [
        enabled,
        x,
        y
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PointerFieldContext.Provider, {
        value: {
            x,
            y,
            enabled
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/components/providers/PointerFieldProvider.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
_s(PointerFieldProvider, "KfIE17WF1gS6euBwZrtvosA554c=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$usePrefersReducedMotion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePrefersReducedMotion"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useMediaQuery$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMediaQuery"]
    ];
});
_c = PointerFieldProvider;
var _c;
__turbopack_context__.k.register(_c, "PointerFieldProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/Button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$motion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/motion.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
;
const variantStyles = {
    primary: "bg-[var(--color-off-white)] text-[var(--color-graphite-900)] hover:bg-white",
    secondary: "bg-transparent text-[var(--text-primary)] border border-[var(--border-hairline-strong)] hover:border-[var(--accent-primary)] hover:bg-[color-mix(in_srgb,var(--accent-primary)_8%,transparent)]",
    ghost: "bg-transparent text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface)]",
    critical: "bg-transparent text-[var(--accent-critical)] border border-[color-mix(in_srgb,var(--accent-critical)_40%,transparent)] hover:bg-[color-mix(in_srgb,var(--accent-critical)_10%,transparent)]"
};
const sizeStyles = {
    sm: "text-[13px] px-3.5 py-1.5 gap-1.5",
    md: "text-[14px] px-5 py-2.5 gap-2",
    lg: "text-[15px] px-7 py-3.5 gap-2.5"
};
const Button = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = ({ className, variant = "primary", size = "md", children, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
        ref: ref,
        whileHover: {
            y: -1
        },
        whileTap: {
            y: 0,
            scale: 0.985
        },
        transition: {
            duration: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$motion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["durations"].fast,
            ease: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$motion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["easeStandard"]
        },
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative inline-flex items-center justify-center rounded-[var(--radius-sm)] font-medium", "transition-colors duration-200", "focus-visible:outline-2 focus-visible:outline-[var(--focus-ring)] focus-visible:outline-offset-2", "disabled:opacity-40 disabled:pointer-events-none", variantStyles[variant], sizeStyles[size], className),
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/components/ui/Button.tsx",
        lineNumber: 40,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = Button;
Button.displayName = "Button";
var _c, _c1;
__turbopack_context__.k.register(_c, "Button$forwardRef");
__turbopack_context__.k.register(_c1, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hooks/useHasMounted.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useHasMounted",
    ()=>useHasMounted
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
const subscribe = ()=>()=>{};
function useHasMounted() {
    _s();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"])(subscribe, {
        "useHasMounted.useSyncExternalStore": ()=>true
    }["useHasMounted.useSyncExternalStore"], {
        "useHasMounted.useSyncExternalStore": ()=>false
    }["useHasMounted.useSyncExternalStore"]);
}
_s(useHasMounted, "FpwL93IKMLJZuQQXefVtWynbBPQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hooks/useMediaQuery.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useIsMobile",
    ()=>useIsMobile,
    "useIsTablet",
    ()=>useIsTablet,
    "useMediaQuery",
    ()=>useMediaQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
"use client";
;
function useMediaQuery(query) {
    _s();
    const subscribe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useMediaQuery.useCallback[subscribe]": (callback)=>{
            const mql = window.matchMedia(query);
            mql.addEventListener("change", callback);
            return ({
                "useMediaQuery.useCallback[subscribe]": ()=>mql.removeEventListener("change", callback)
            })["useMediaQuery.useCallback[subscribe]"];
        }
    }["useMediaQuery.useCallback[subscribe]"], [
        query
    ]);
    const getSnapshot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useMediaQuery.useCallback[getSnapshot]": ()=>window.matchMedia(query).matches
    }["useMediaQuery.useCallback[getSnapshot]"], [
        query
    ]);
    const getServerSnapshot = ()=>false;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"])(subscribe, getSnapshot, getServerSnapshot);
}
_s(useMediaQuery, "rUsu0urmp2LB4luW/6H994MS1H4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"]
    ];
});
const useIsTablet = ()=>{
    _s1();
    return useMediaQuery("(max-width: 1024px)");
};
_s1(useIsTablet, "AGUsWXV/IGWEYGrGyhqugaEb9zc=", false, function() {
    return [
        useMediaQuery
    ];
});
const useIsMobile = ()=>{
    _s2();
    return useMediaQuery("(max-width: 640px)");
};
_s2(useIsMobile, "AGUsWXV/IGWEYGrGyhqugaEb9zc=", false, function() {
    return [
        useMediaQuery
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hooks/usePointerField.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "usePointerField",
    ()=>usePointerField
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$providers$2f$PointerFieldProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/providers/PointerFieldProvider.tsx [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function usePointerField() {
    _s();
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$providers$2f$PointerFieldProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PointerFieldContext"]);
    if (!ctx) {
        throw new Error("usePointerField must be used within a PointerFieldProvider");
    }
    return ctx;
}
_s(usePointerField, "/dMy7t63NXD4eYACoT93CePwGrg=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hooks/usePrefersReducedMotion.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "usePrefersReducedMotion",
    ()=>usePrefersReducedMotion
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useMediaQuery$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useMediaQuery.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
function usePrefersReducedMotion() {
    _s();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useMediaQuery$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMediaQuery"])("(prefers-reduced-motion: reduce)");
}
_s(usePrefersReducedMotion, "AGUsWXV/IGWEYGrGyhqugaEb9zc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useMediaQuery$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMediaQuery"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/motion.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * RENOVA OS — MOTION UTILITIES
 *
 * Shared Framer Motion primitives so every screen moves with the
 * same physical logic. Nothing snaps, nothing bounces aggressively.
 * Import these instead of writing ad-hoc transition objects.
 */ __turbopack_context__.s([
    "durations",
    ()=>durations,
    "easeEnter",
    ()=>easeEnter,
    "easeExit",
    ()=>easeExit,
    "easeStandard",
    ()=>easeStandard,
    "fadeUp",
    ()=>fadeUp,
    "hoverElevate",
    ()=>hoverElevate,
    "resolveIn",
    ()=>resolveIn,
    "staggerContainer",
    ()=>staggerContainer,
    "transitionBase",
    ()=>transitionBase
]);
const easeStandard = [
    0.22,
    1,
    0.36,
    1
];
const easeEnter = [
    0.16,
    1,
    0.3,
    1
];
const easeExit = [
    0.7,
    0,
    0.84,
    0
];
const durations = {
    instant: 0.1,
    fast: 0.2,
    base: 0.4,
    slow: 0.8,
    ambient: 6
};
const transitionBase = {
    duration: durations.base,
    ease: easeStandard
};
const fadeUp = {
    hidden: {
        opacity: 0,
        y: 16
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: durations.slow,
            ease: easeEnter
        }
    }
};
const resolveIn = {
    hidden: {
        opacity: 0,
        filter: "blur(12px)",
        scale: 0.98
    },
    visible: {
        opacity: 1,
        filter: "blur(0px)",
        scale: 1,
        transition: {
            duration: durations.slow,
            ease: easeEnter
        }
    }
};
function staggerContainer(stagger = 0.12, delayChildren = 0) {
    return {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: stagger,
                delayChildren
            }
        }
    };
}
const hoverElevate = {
    rest: {
        y: 0,
        boxShadow: "var(--shadow-1)"
    },
    hover: {
        y: -2,
        boxShadow: "var(--shadow-2)",
        transition: {
            duration: durations.fast,
            ease: easeStandard
        }
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/session.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * sessionStorage flags coordinating the cinematic intro across the
 * navigation boundary between `/` and the app shell. Centralized here
 * so both sides read/write the same key names.
 */ __turbopack_context__.s([
    "SESSION_KEYS",
    ()=>SESSION_KEYS,
    "clearSessionFlag",
    ()=>clearSessionFlag,
    "getSessionFlag",
    ()=>getSessionFlag,
    "setSessionFlag",
    ()=>setSessionFlag
]);
const SESSION_KEYS = {
    /** Set once the full intro has played once this session — enables the fast boot path. */ visited: "renova-visited",
    /** Set right before navigating away from "/" so the app shell can fade in from black. */ launching: "renova-launching"
};
function getSessionFlag(key) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        return window.sessionStorage.getItem(key) === "1";
    } catch  {
        return false;
    }
}
function setSessionFlag(key) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        window.sessionStorage.setItem(key, "1");
    } catch  {
    /* sessionStorage unavailable (e.g. private mode) — degrade silently, always use the full sequence */ }
}
function clearSessionFlag(key) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        window.sessionStorage.removeItem(key);
    } catch  {
    /* no-op */ }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_12f63z1._.js.map
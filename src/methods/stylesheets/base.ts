import type { RenderOptions } from '../../common/types';

export const name = 'base';
export function render({
  default_foreground_color,
  default_background_color,
  is_toplevel,
}: RenderOptions): string {
  return `
:root {
  --dark-background-light-text-add-on-foreground-color: ${default_foreground_color} !important;
  --dark-background-light-text-add-on-background-color: ${default_background_color} !important;
}

html {
${
  is_toplevel
    ? `\
  background-color: transparent;
`
    : ''
}\
  color: ${default_foreground_color};
}

input[type="range"] {
  -moz-appearance: none;
}

button,
input:not([type="checkbox"]):not([type="radio"]):not([type="range"]):not([type="file"]),
textarea,
select,
[contenteditable="true"] {
  -moz-appearance: none !important;
  color: ${default_foreground_color} !important;
  background-color: transparent;
  border: none !important;
  outline: none !important;
  transition-duration: 0.3s;
  transition-property: border-color, box-shadow;
}

input:not([type="checkbox"]):not([type="radio"]):not([type="range"]):not([type="file"]):not([type="button"]):not([type="color"]):not([type="image"]):not([type="reset"]):not([type="submit"]),
textarea,
[contenteditable="true"] {
  background-image: none !important;
}

select {
  background-image: url('data:image/svg+xml;utf8,<?xml version="1.0" encoding="utf-8"?><svg xmlns="http://www.w3.org/2000/svg" width="500" height="500"><path stroke="${encodeURIComponent(
    default_foreground_color,
  )}" fill="transparent" stroke-width="40" d="M 100 175 L 250 350 L 400 175"/></svg>') !important;
  background-position: right center !important;
  background-repeat: no-repeat !important;
  padding-right: 1em !important;
  background-size: 1em !important;
}

/* Gmail Sidebar Navigation Icons */
.TK .nZ,
.TK .TO .nZ,
.CL .nZ,
.CL .TO .nZ,
.aim .aio,
.ain .a8X,
.z0 .L3[data-tooltip*="Compose"],
.gb_pc[aria-label*="Gmail"],
.gb_f[aria-label*="Gmail"],
.aKS[role="tab"],
.aKU[role="tab"],
.aqJ[role="tab"],
.aql[role="tab"],
.aqm[role="tab"],
.TK .aHS-bnt,
.TK .n6,
.TK .CJ,
.TK .CL,
.TK .qj,
.TK .TO .aHS-bnt,
.TK .TO .n6,
.TK .TO .CJ,
.TK .TO .qj,
.TK .n6 .aT6,
.TK .n6 svg,
.TK .CJ svg,
.TK .qj svg,
.TK [data-tooltip] svg,
.z0 .L3,
.z0 .aic,
.btC .gU,
.TK .aHS-bu1,
.TK .aT6,
.TK .CK,
.TK a:not([aria-selected="true"]) .qj,
.TK a:not([aria-selected="true"]) .CJ,
.TK a:not([aria-selected="true"]) svg,
.TK li:not([aria-selected="true"]) .qj,
.TK li:not([aria-selected="true"]) .CJ,
.TK li:not([aria-selected="true"]) svg,
.TK .n3,
.TK .n4,
.TK .WR .n3,
.TK .WR .n4,
/* Gmail Sidebar Navigation Links */
.TK a[href*="#inbox"],
.TK a[href*="#starred"],
.TK a[href*="#snoozed"],
.TK a[href*="#sent"],
.TK a[href*="#drafts"],
.CL a[href*="#compose"],
/* Gmail Toolbar Icons */
.ar .T-I,
.ar .T-I-J3,
.ar .T-I-Kq,
.ar .T-I-Js-IF,
.ar .T-I-ax7,
.ar [data-tooltip],
.ar button,
.ar [role="button"],
.G-Ni .T-I,
.G-Ni button,
.G-Ni [role="button"],
.G-Ni [data-tooltip],
.aeN .T-I,
.aeN button,
.aeN [role="button"],
.aeN [data-tooltip],
.ar svg,
.G-Ni svg,
.aeN svg,
.nH .ar svg,
.nH .G-Ni svg,
.nH .aeN svg,
/* Gmail-specific Navigation SVG Icons */
.TK nav svg:not([data-exclude-icon]),
.G-Ni svg:not([data-exclude-icon]),
.aeN svg:not([data-exclude-icon]),
/* Gmail Named SVG Icons */
.nH svg[data-icon-name="inbox"],
.nH svg[data-icon-name="star"],
.nH svg[data-icon-name="schedule"],
.nH svg[data-icon-name="send"],
.nH svg[data-icon-name="draft"],
.nH svg[data-icon-name="label"],
/* Gmail Tooltip-based Icon Targeting */
.ar [data-tooltip*="Archive"] svg,
.ar [data-tooltip*="Delete"] svg,
.ar [data-tooltip*="Mark"] svg,
.ar [data-tooltip*="Snooze"] svg,
.ar [data-tooltip*="More"] svg,
.G-Ni [aria-label*="Archive"] svg,
.G-Ni [aria-label*="Delete"] svg,
.G-Ni [aria-label*="Mark"] svg,
.G-Ni [aria-label*="Snooze"] svg,
.G-Ni [aria-label*="More"] svg,
.aeN [aria-label*="Archive"] svg,
.aeN [aria-label*="Delete"] svg,
.aeN [aria-label*="Mark"] svg,
.aeN [aria-label*="Snooze"] svg,
.aeN [aria-label*="More"] svg {
  filter: brightness(0) invert(1) !important;
}

/* Google Docs Toolbar Icons Only - No Background Changes */
.docs-icon,
.docs-icon-img,
.goog-toolbar-button .docs-icon,
.goog-toolbar-menu-button .docs-icon,
.docs-toolbar .docs-icon,
.kix-toolbar .docs-icon,
.docs-material .docs-icon,
.docs-material-button .docs-icon,
/* SVG icons in Google Docs - More specific targeting */
.docs-toolbar svg,
.kix-toolbar svg,
.docs-material svg,
.goog-toolbar-button svg,
.goog-toolbar-menu-button svg,
.docs-titlebar svg,
.docs-omnibox svg,
/* Google Docs specific menu buttons */
.docs-material .menu-button svg,
.docs-toolbar .menu-button svg,
.docs-material .goog-menu-button svg,
.docs-toolbar .goog-menu-button svg,
/* Google Docs specific role buttons */
.docs-material [role="button"] svg:not([data-exclude-icon]),
.docs-toolbar [role="button"] svg:not([data-exclude-icon]),
.kix-toolbar [role="button"] svg:not([data-exclude-icon]),
/* Dark Reader inspired specific Google Docs elements */
.punch-filmstrip-controls-icon,
.docs-homescreen-icon,
.kix-equation-toolbar-icon,
.kix-equation-toolbar-palette-icon,
.docs-instant-button-bubble-icon-container,
.docs-preview-palette-item,
.goog-menuitem-checkbox,
.goog-dimension-picker-unhighlighted,
.goog-dimension-picker-highlighted,
#docs-star,
.rs-role-icon,
.toggle-link-icon,
.link-management-drop-down-icon,
.vs-icon,
.vpc-icon,
.docs-analytics-img,
.share-butter-copy-icon,
.exportUnderline,
.freebirdMaterialIconIconEl,
.quantumWizTogglePapercheckboxCheckMark,
#docs-titlebar-share-client-button .scb-button-icon:not([class*="white"]),
.docs-gm .docos-icon-overflow-three-dots-size,
/* Specific Google Docs UI selectors */
.docs-icon-bold,
.docs-icon-italic,
.docs-icon-underline,
.docs-icon-text-color,
.docs-icon-highlight-color,
.docs-icon-align-left,
.docs-icon-align-center,
.docs-icon-align-right,
.docs-icon-numbered-list,
.docs-icon-bullet-list,
.docs-icon-indent-decrease,
.docs-icon-indent-increase,
.docs-icon-link,
.docs-icon-image,
.docs-icon-comment,
.docs-icon-suggestion-mode,
.docs-icon-editing-mode,
.docs-icon-viewing-mode {
  filter: brightness(0) invert(1) !important;
}

/* Google Docs Document Background - Effective Approach */
.kix-canvas-tile-content[style*="background-color: rgb(255, 255, 255)"],
.kix-canvas-tile-content[style*="background-color: rgb(249, 251, 253)"],
.kix-appview-editor,
.kix-appview-editor[style*="background-color: rgb(255, 255, 255)"],
.kix-appview-editor[style*="background-color: rgb(249, 251, 253)"],
.kix-canvas-tile-content {
  background: transparent !important;
  background-color: transparent !important;
}

/* Google Docs Canvas Content */
.kix-canvas-tile-content {
  background: transparent !important;
  background-size: contain !important;
}

/* Google Docs Document Area */
.kix-page-paginated,
.kix-page-content-wrap,
.kix-paginateddocumentplugin,
#docs-editor-container,
#docs-editor {
  background: transparent !important;
  background-color: transparent !important;
}

/* Google Docs SVG White Fills */
.kix-canvas-tile-content rect[fill="rgba(255,255,255,1)"],
.kix-canvas-tile-content rect[fill="rgb(255,255,255)"],
.kix-canvas-tile-content rect[fill="#ffffff"],
.kix-canvas-tile-content rect[fill="white"],
.kix-canvas-tile-content rect[fill="#f9fbfd"],
.kix-canvas-tile-content rect[fill="rgb(249,251,253)"] {
  fill: transparent !important;
}

/* Google Docs Document Container */
#contents > div {
  background-color: transparent !important;
  background: transparent !important;
}

/* Google Docs Page Background Override */
.kix-page {
  background: transparent !important;
  background-color: transparent !important;
}

/* Google Docs Body Background */
body.docs-body-pageless,
body.docs-body {
  background: transparent !important;
  background-color: transparent !important;
}

/* Google Docs Text Elements - Invert Approach */
#docs-editor canvas,
.kix-canvas-tile-content,
.kix-canvas-tile-content text,
.kix-canvas-tile-content svg text,
.docs-texteventtarget-iframe,
.docs-text-ui-cursor-blink,
/* Google Docs Specific Text Elements */
.kix-lineview,
.kix-lineview-text-block,
.kix-wordhtmlgenerator-word-node {
  filter: invert(1) !important;
}

/* Google Docs Title Input */
input.docs-title-input,
.docs-title-input {
  background-color: transparent !important;
  color: ${default_foreground_color} !important;
}

/* Google Docs Cursor */
.kix-cursor-caret {
  border-color: ${default_foreground_color} !important;
}

/* Google Docs Toolbar Text Elements */
.goog-flat-menu-button-caption,
/* Google Docs Menu Bar (File, Edit, View, etc.) - More Specific */
.docs-menubar-item,
.docs-menubar-item *,
.goog-menubar-item,
.goog-menubar-item *,
.goog-menubar-item-label,
.goog-menubar-item-caption,
.docs-menubar-label,
.docs-menubar-caption,
/* Menu bar containers */
.docs-menubar,
.docs-menubar *,
.goog-menubar,
.goog-menubar *,
.docs-material-menubar,
.docs-material-menubar *,
.docs-material-menubar-item,
.docs-material-menubar-item *,
/* Menu button captions */
.goog-menu-button-caption,
.goog-menu-button-caption *,
.docs-menu-button-caption,
.docs-menu-button-caption *,
/* Additional menu selectors */
[role="menubar"],
[role="menubar"] *,
[role="menuitem"],
[role="menuitem"] *,
/* Google Docs specific menu elements */
.goog-flat-menu-button,
.goog-flat-menu-button *,
.docs-material-menu-button,
.docs-material-menu-button * {
  color: ${default_foreground_color} !important;
}

/* Gmail Sidebar Images */
.TK .nZ img,
.TK .TO img,
.TK .CJ img,
.TK .qj img,
.aim img,
.ain img,
.z0 img {
  filter: brightness(0) invert(1) !important;
}

/* Gmail Navigation Elements */
.TK .n6 *:not(img) {
  filter: brightness(0) invert(1) !important;
}

/* Transparent Backgrounds */

.nH,
.aT,
.ar,
.as,
.G-Ni,
.aeN,
.TO,
.Di,
.J-Ke,
.aim,
.ain,
.CL,
.TK {
  background: transparent !important;
  background-color: transparent !important;
}
`;
}

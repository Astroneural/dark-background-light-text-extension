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
/* Navigation SVG Icons */
nav[role="navigation"] svg:not([data-exclude-icon]),
.TK nav svg:not([data-exclude-icon]),
.G-Ni svg:not([data-exclude-icon]),
.aeN svg:not([data-exclude-icon]),
/* Named SVG Icons */
svg[data-icon-name="inbox"],
svg[data-icon-name="star"],
svg[data-icon-name="schedule"],
svg[data-icon-name="send"],
svg[data-icon-name="draft"],
svg[data-icon-name="label"],
/* Tooltip-based Icon Targeting */
[data-tooltip*="Archive"] svg,
[data-tooltip*="Delete"] svg,
[data-tooltip*="Mark"] svg,
[data-tooltip*="Snooze"] svg,
[data-tooltip*="More"] svg,
[aria-label*="Archive"] svg,
[aria-label*="Delete"] svg,
[aria-label*="Mark"] svg,
[aria-label*="Snooze"] svg,
[aria-label*="More"] svg {
  filter: brightness(0) invert(1) !important;
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

/* Content Images - Exclude from Icon Filtering */
img,
[role="img"],
.aXq img,
.go img,
.yW img,
.aZo img,
[data-hovercard-id] img,
.bzc img,
[aria-label*="Profile"] img,
[aria-label*="profile"] img,
[title*="Profile"] img,
[title*="profile"] img,
.aKw img {
  filter: none !important;
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

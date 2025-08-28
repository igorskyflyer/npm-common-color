<div align="center">
  <img src="https://raw.githubusercontent.com/igorskyflyer/npm-common-color/main/media/common-color.png" alt="Icon of Common Color" width="256" height="256">
  <h1>Common Color</h1>
</div>

<br>

<h4 align="center">
  🎨 Provides common Color-related TypeScript types. 🌈
</h4>

<br>
<br>

## 📃 Table of Contents

- [Features](#-features)
- [Usage](#-usage)
- [API](#-api)
  - [Constants](#-constants)
      - [SpecialColor](#specialcolor)
      - [SystemColor](#systemcolor)
      - [NamedStandardColor](#namedstandardcolor)
      - [NamedExtendedColor](#namedextendedcolor)
  - [Template literals](#-template-literals)
      - [HexColor](#hexcolor)
      - [RgbColor](#rgbcolor)
      - [RgbaColor](#rgbacolor)
      - [HslColor](#hslcolor)
      - [HwbColor](#hwbcolor)
      - [LabColor](#labcolor)
      - [LchColor](#lchcolor)
      - [OklabColor](#oklabcolor)
      - [OklchColor](#oklchcolor)
      - [LightDarkColor](#lightdarkcolor)
      - [ColorMix](#colormix)
      - [DeviceCmyk](#devicecmyk)
      - [ColorContrast](#colorcontrast)
      - [LinearGradient](#lineargradient)
      - [RadialGradient](#radialgradient)
      - [ConicGradient](#conicgradient)
      - [RepeatingLinearGradient](#repeatinglineargradient)
      - [RepeatingRadialGradient](#repeatingradialgradient)
      - [RepeatingConicGradient](#repeatingconicgradient)
  - [Special](#-special)
      - [Color](#color)
      - [ColorWithKeywords](#colorwithkeywords)
      - [ColorExtended](#colorextended)
  - [CSS levels](#css-levels)
      - [CSS level 3](#csslevel3color)
      - [CSS level 4](#csslevel4color)
      - [CSS level 5](#csslevel5color)
- [Examples](#️-examples)
- [Changelog](#-changelog)
- [Support](#-support)
- [License](#-license)
- [Related](#-related)
- [Author](#-author)

<br>
<br>

## 🤖 Features

- 🎨 Supports every major CSS color format and keyword
- 🌈 Includes named colors, system colors, and special keywords
- 🔢 Handles `HEX`, `RGB(A)`, `HSL`, `HWB`, `Lab`, `LCH`, `OKLab`, and `OKLCH`
- 🌀 Covers gradients: `linear`, `radial`, `conic`, and `repeating` variants
- ⚡ Supports modern CSS functions like `color-mix`, `light-dark`, `device-cmyk`, `color-contrast`
- 📚 Typed definitions for CSS _Color Modules Level **3**–**6**_
- 🛡 Strong TypeScript typing for accuracy and autocomplete

<br>
<br>

## 🕵🏼 Usage

Install it by executing any of the following, depending on your preferred package manager:

```bash
pnpm add @igorskyflyer/common-color
```

```bash
yarn add @igorskyflyer/common-color
```

```bash
npm i @igorskyflyer/common-color
```

<br>
<br>

## 🤹🏼 API

### 🤖 Constants

#### `SpecialColor`

Technically, keywords - not colors per se, they provide ways of using special colors: `currentcolor`, `transparent`, `initial`, `inherit` and `unset`.

<br>

Each of them has a special meaning for the browser:

- `currentcolor`: the current color of the element
- `transparent`: a fully transparent color
- `initial`: the default value defined by the browser
- `inherit`: inherits the color from the parent element
- `unset`: resets the property to its natural value, either inherited or initial

---

#### `SystemColor`

This type represents a set of system-defined color keywords that correspond to system UI elements, which can adapt based on the user's operating system and theme settings.

<br>

Includes keywords like: `AccentColor`, `AccentColorText`, `ActiveText`, `ButtonBorder`, `ButtonFace`, etc.

<br>

> [!TIP]
> Learn more about [SystemColor](https://developer.mozilla.org/en-US/docs/Web/CSS/system-color) ![External link](https://raw.githubusercontent.com/igorskyflyer/igorskyflyer/main/assets/external.svg) on MDN.
>

---

#### `NamedStandardColor`

Common and standardized color identifiers.
Includes values like: `black`, `silver`, `gray`, `white`, `maroon`, `red`, etc.

---

#### `NamedExtendedColor`

Includes all of the colors defined by [`NamedStandardColor`](#namedstandardcolor) and 131 colors more, values like: `aliceblue`, `antiquewhite`, `aqua`, `aquamarine`, `azure`, `beige`, `bisque`, etc.

---

### 📜 Template literals

<br>

> [!CAUTION]
> The following types are derived from a template literal type, the types do **NOT** validate the actual color.
>

---

#### `HexColor`

A template literal type that adheres to the format `#${string}`, effectively representing a Hex color.

---

#### `RgbColor`

A template literal type that adheres to the format `rgb(${string})`, effectively representing an RGB color.

---

#### `RgbaColor`

A template literal type that adheres to the format `rgba(${string})`, effectively representing an RGBA color.

---

#### `HslColor`

A template literal type that adheres to the format `hsl(${string})`, effectively representing an HSL color.

---

#### `HwbColor`

A template literal type that adheres to the format `hwb(${string})`, effectively representing an HWB color.

---

#### `LabColor`

A template literal type that adheres to the format `lab(${string})`, effectively representing a LAB color.

---

#### `LchColor`

A template literal type that adheres to the format `lch(${string})`, effectively representing a LCH color.

---

#### `OklabColor`

A template literal type that adheres to the format `oklab(${string})`, effectively representing an Oklab color.

---

#### `OklchColor`

A template literal type that adheres to the format `oklch(${string})`, effectively representing an Oklch color.

---

#### `LightDarkColor`

A template literal type that adheres to the format `light-dark(${string})`, effectively representing a light-dark color.

---

#### `ColorMix`

A template literal type that adheres to the format `color-mix(${string})`, effectively representing a color-mix.

---

#### `DeviceCmyk`

A template literal type that adheres to the format `device-cmyk(${string})`, effectively representing a device-cmyk color.

---

#### `ColorContrast`

A template literal type that adheres to the format `color-contrast(${string})`, effectively representing a color-contrast color.

---

### Gradients


<br>

> [!TIP]
> Gradients are supported from `v1.1.0`.
>

---

#### `LinearGradient`

A template literal type that adheres to the format `linear-gradient(${string})`, effectively representing a linear gradient.

---

#### `RadialGradient`

A template literal type that adheres to the format `radial-gradient(${string})`, effectively representing a radial gradient.

---

#### `ConicGradient`

A template literal type that adheres to the format `conic-gradient(${string})`, effectively representing a conic gradient.

---

#### `RepeatingLinearGradient`

A template literal type that adheres to the format `repeating-linear-gradient(${string})`, effectively representing a repeating linear gradient.

---

#### `RepeatingRadialGradient`

A template literal type that adheres to the format `repeating-radial-gradient(${string})`, effectively representing a repeating radial gradient.

---

#### `RepeatingConicGradient`

A template literal type that adheres to the format `repeating-conic-gradient(${string})`, effectively representing a repeating conic gradient.

---

### 🦄 Special

---

#### `Color`

A broad color type that includes all of the previously mentioned color types:
- [`NamedStandardColor`](#namedstandardcolor)
- [`NamedExtendedColor`](#namedextendedcolor)
- [`HexColor`](#hexcolor)
- [`RgbColor`](#rgbcolor)
- [`RgbaColor`](#rgbacolor)
- [`HslColor`](#hslcolor)
- [`HwbColor`](#hwbcolor)
- [`LabColor`](#labcolor)
- [`LchColor`](#lchcolor)
- [`OklabColor`](#oklabcolor)
- [`OklchColor`](#oklchcolor)
- [`LightDarkColor`](#lightdarkcolor)
- [`ColorMix`](#colormix)
- [`DeviceCmyk`](#devicecmyk)
- [`ColorContrast`](#colorcontrast)
- [`LinearGradient`](#lineargradient)
- [`RadialGradient`](#radialgradient)
- [`ConicGradient`](#conicgradient)
- [`RepeatingLinearGradient`](#repeatinglineargradient)
- [`RepeatingRadialGradient`](#repeatingradialgradient)
- [`RepeatingConicGradient`](#repeatingconicgradient)

---

#### `ColorWithKeywords`

An even broader color type that includes the [`Color`](#color) type (and all of the previously mentioned color types) with the addition of colors from the [`SpecialColor`](#specialcolor) type.

---

#### `ColorExtended`

The most broad color type that includes the [`ColorWithKeywords`](#colorwithkeywords) type (and all of the previously mentioned color types) with the addition of colors from the [`SystemColor`](#systemcolor) type.

---

### CSS levels

<p align="right"><code>since v1.2.0</code></p>

<br>

In addition to using any color type, since `v1.2.0` it is possible to narrow the color types to a certain [CSS color module level](https://www.w3.org/TR/?filter-tr-name=color+module+level) ![An external link](https://raw.githubusercontent.com/igorskyflyer/igorskyflyer/main/assets/external.svg).

---

#### CssLevel3Color

Includes the following CSS color module level **`3`** types:
- [`HexColor`](#hexcolor)
- [`RgbColor`](#rgbcolor)
- [`NamedStandardColor`](#namedstandardcolor)
- [`RgbaColor`](#rgbacolor)
- [`HslColor`](#hslcolor)
- [`SystemColor`](#systemcolor)
- [`NamedExtendedColor`](#namedextendedcolor)
- [`SpecialColor`](#specialcolor)
- [`LinearGradient`](#lineargradient)
- [`RadialGradient`](#radialgradient)
- [`RepeatingLinearGradient`](#repeatinglineargradient)
- [`RepeatingRadialGradient`](#repeatingradialgradient)

---

#### CssLevel4Color

Includes previously mentioned CSS color module level **`3`** types and the following CSS color module level **`4`** types:
- [`HwbColor`](#hwbcolor)
- [`LabColor`](#labcolor)
- [`LchColor`](#lchcolor)
- [`OklabColor`](#oklabcolor)
- [`OklchColor`](#oklchcolor)
- [`ConicGradient`](#lineargradient)
- [`RepeatingConicGradient`](#repeatingconicgradient)

---

#### CssLevel5Color

Includes previously mentioned CSS color module level **`4`** types and the following CSS color module level **`5`** types:
- [`LightDarkColor`](#lightdarkcolor)
- [`DeviceCmyk`](#devicecmyk)
- [`ColorMix`](#colormix)

---

#### CssLevel6Color

Includes previously mentioned CSS color module level **`5`** types and the following CSS color module level **`6`** types:
- [`ColorContrast`](#colorcontrast)

<br>
<br>

## 🗒️ Examples

`ui.ts`
```ts
import type { Color } from '@igorskyflyer/common-color'

const uiColor: Color = '#0099ff' // ok, now do something with the Hex color
const uiScrollbar: Color = 'rfb(0, 128, 255)' // will trigger an ERROR
                  // (typo, rFb instead of rGb)

```


<br>
<br>

## 📝 Changelog

📑 The changelog is available here, [CHANGELOG.md](https://github.com/igorskyflyer/npm-common-color/blob/main/CHANGELOG.md).

<br>
<br>

## 🪪 License

Licensed under the MIT license which is available here, [MIT license](https://github.com/igorskyflyer/npm-common-color/blob/main/LICENSE).

<br>
<br>

## 💖 Support

<div align="center">
  I work hard for every project, including this one and your support means a lot to me!
  <br>
  Consider buying me a coffee. ☕
  <br>
  <br>
  <a href="https://ko-fi.com/igorskyflyer" target="_blank"><img src="https://raw.githubusercontent.com/igorskyflyer/igorskyflyer/main/assets/ko-fi.png" alt="Donate to igorskyflyer" width="180" height="46"></a>
  <br>
  <br>
  <em>Thank you for supporting my efforts!</em> 🙏😊
</div>

<br>
<br>

## 🧬 Related

[@igorskyflyer/unc-path](https://www.npmjs.com/package/@igorskyflyer/unc-path)

> _🥽 Provides ways of parsing UNC paths and checking whether they are valid. 🎱_

<br>

[@igorskyflyer/keppo](https://www.npmjs.com/package/@igorskyflyer/keppo)

> _🎡 Parse, manage, compare and output SemVer-compatible version numbers. 🛡_

<br>

[@igorskyflyer/jmap](https://www.npmjs.com/package/@igorskyflyer/jmap)

> _🕶️ Reads a JSON file into a Map. 🌻_

<br>

[@igorskyflyer/zing](https://www.npmjs.com/package/@igorskyflyer/zing)

> _🐌 Zing is a C# style String formatter for JavaScript that empowers Strings with positional arguments - composite formatting. 🚀_

<br>

[@igorskyflyer/duoscribi](https://www.npmjs.com/package/@igorskyflyer/duoscribi)

> _✒ DúöScríbî allows you to convert letters with diacritics to regular letters. 🤓_

<br>
<br>
<br>

## 👨🏻‍💻 Author
Created by **Igor Dimitrijević** ([*@igorskyflyer*](https://github.com/igorskyflyer/)).

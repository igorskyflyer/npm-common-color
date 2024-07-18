<h1 align="center">Common color types</h1>

<br>

<p align="center">
	🎨 Provides common Color-related TypeScript types. 🌈
</p>

<br>
<br>

<div align="center">
	<blockquote>
		<br>
		<h4>💖 Support further development</h4>
		<span>I work hard for every project, including this one and your support means a lot to me!
		<br>
		Consider buying me a coffee. ☕
		<br>
		<strong>Thank you for supporting my efforts! 🙏😊</strong></span>
		<br>
		<br>
		<a href="https://ko-fi.com/igorskyflyer" target="_blank"><img src="https://raw.githubusercontent.com/igorskyflyer/igorskyflyer/main/assets/ko-fi.png" alt="Donate to igorskyflyer" width="150"></a>
		<br>
		<br>
		<a href="https://github.com/igorskyflyer"><em>@igorskyflyer</em></a>
		<br>
		<br>
		<br>
	</blockquote>
</div>

<br>
<br>

## 📃 Table of contents

- [Usage](#-usage)
- [API](#-api)
	- [Constants](#constants)
      - [SpecialColor](#specialcolor)
      - [SystemColor](#systemcolor)
      - [NamedStandardColor](#namedstandardcolor)
      - [NamedExtendedColor](#namedextendedcolor)
	- [Template literals](#template-literals)
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
      - [Color](#color)
      - [ColorWithKeywords](#colorwithkeywords)
      - [ColorExtended](#colorextended)
- [Examples](#-examples)
- [Changelog](#-changelog)
- [License](#-license)
- [Related](#-related)
- [Author](#-author)

---

<br>
<br>

## 🕵🏼 Usage

Install it by executing:

```shell
npm i "@igor.dvlpr/common-color"
```

<br>

## 🤹🏼 API

This package only exposes the types below:

- `SpecialColor`
- `SystemColor`
- `NamedStandardColor`
- `NamedExtendedColor`
- `HexColor`
- `RgbColor`
- `RgbaColor`
- `HslColor`
- `HwbColor`
- `LabColor`
- `LchColor`
- `OklabColor`
- `OklchColor`
- `LightDarkColor`
- `ColorMix`
- `Color`
- `ColorWithKeywords`
- `ColorExtended`

<br>

---

### Constants

---

#### SpecialColor

Technically keywords, they provide ways of using special colors: `currentcolor`, `transparent`, `initial`, `inherit` and `unset`.

<br>

Each of them has a special meaning for the browser:

- `currentcolor`: the current color of the element
- `transparent`: a fully transparent color
- `initial`: the default value defined by the browser
- `inherit`: inherits the color from the parent element
- `unset`: resets the property to its natural value, either inherited or initial

---

#### SystemColor

This type represents a set of system-defined color keywords that correspond to system UI elements, which can adapt based on the user's operating system and theme settings.

<br>

Includes keywords like: `AccentColor`, `AccentColorText`, `ActiveText`, `ButtonBorder`, `ButtonFace`, etc.

<br>

> [!TIP]
> Learn more about [SystemColor](https://developer.mozilla.org/en-US/docs/Web/CSS/system-color) ![External link](https://raw.githubusercontent.com/igorskyflyer/igorskyflyer/main/assets/external.svg) on MDN.
>

---

#### NamedStandardColor

Common and standardized color identifiers.
Includes values like: `black`, `silver`, `gray`, `white`, `maroon`, `red`, etc.

---

#### NamedExtendedColor

Includes all of the colors defined by [`NamedStandardColor`](#namedstandardcolor) and 139 colors more, values like: `aliceblue`, `antiquewhite`, `aqua`, `aquamarine`, `azure`, `beige`, `bisque`, etc.

---

### Template literals

<br>

> [!CAUTION]
> The following types are derived from a template literal type, the types do **NOT** validate the actual color.
>

<br>

---

#### HexColor

A template literal type that adheres to the format `#${string}`, effectively representing a Hex color.

---

#### RgbColor

A template literal type that adheres to the format `rgb(${string})`, effectively representing an RGB color.

---

#### RgbaColor

A template literal type that adheres to the format `rgba(${string})`, effectively representing an RGBA color.

---

#### HslColor

A template literal type that adheres to the format `hsl(${string})`, effectively representing an HSL color.

---

#### HwbColor

A template literal type that adheres to the format `hwb(${string})`, effectively representing an HWB color.

---

#### LabColor

A template literal type that adheres to the format `lab(${string})`, effectively representing a LAB color.

---

#### LchColor

A template literal type that adheres to the format `lch(${string})`, effectively representing a LCH color.

---

#### OklabColor

A template literal type that adheres to the format `oklab(${string})`, effectively representing an Oklab color.

---

#### OklchColor

A template literal type that adheres to the format `oklch(${string})`, effectively representing an Oklch color.

---

#### LightDarkColor

A template literal type that adheres to the format `light-dark(${string})`, effectively representing a light-dark color.

---

#### ColorMix

A template literal type that adheres to the format `color-mix(${string})`, effectively representing a color-mix.

---

#### Color

A broad color type that includes all of the previously mentioned color types:
- `NamedStandardColor`
- `NamedExtendedColor`
- `HexColor`
- `RgbColor`
- `RgbaColor`
- `HslColor`
- `HwbColor`
- `LabColor`
- `LchColor`
- `OklabColor`
- `OklchColor`
- `LightDarkColor`
- `ColorMix`

---

#### ColorWithKeywords

An even broader color type that includes the `Color` type (and all of the previously mentioned color types) with the addition of colors from the [SpecialColor](#specialcolor) type.

---

#### ColorExtended

The most broad color type that includes the `ColorWithKeywords` typ (and all of the previously mentioned color types) with the addition of colors from the [SystemColor](#systemcolor) type.

---

## ✨ Examples

`ui.ts`
```ts
import type { Color } from '@igor.dvlpr/common-color'

const uiColor: Color = '#0099ff' // ok, now do something with the Hex color
const uiScrollbar: Color = 'rfb(0, 128, 255)' // will trigger an ERROR
                  // (typo, rFb instead of rGb)

```

---

## 📝 Changelog

> 📑 Changelog is available here: [CHANGELOG.md](https://github.com/igorskyflyer/npm-common-color/blob/main/CHANGELOG.md).

---

## 🪪 License

Licensed under the MIT license which is available here, [MIT license](https://github.com/igorskyflyer/npm-common-color/blob/main/LICENSE).

---

## 🧬 Related

[@igor.dvlpr/unc-path](https://www.npmjs.com/package/@igor.dvlpr/unc-path)

> _🥽 Provides ways of parsing UNC paths and checking whether they are valid. 🎱_

<br>

[@igor.dvlpr/keppo](https://www.npmjs.com/package/@igor.dvlpr/keppo)

> _🎡 Parse, manage, compare and output SemVer-compatible version numbers. 🛡_

<br>

[@igor.dvlpr/jmap](https://www.npmjs.com/package/@igor.dvlpr/jmap)

> _🕶️ Reads a JSON file into a Map. 🌻_

<br>

[@igor.dvlpr/zing](https://www.npmjs.com/package/@igor.dvlpr/zing)

> _🐌 Zing is a C# style String formatter for JavaScript that empowers Strings with positional arguments - composite formatting. 🚀_

<br>

[@igor.dvlpr/duoscribi](https://www.npmjs.com/package/@igor.dvlpr/duoscribi)

> _✒ DúöScríbî allows you to convert letters with diacritics to regular letters. 🤓_

---

### 👨🏻‍💻 Author
Created by **Igor Dimitrijević** ([*@igorskyflyer*](https://github.com/igorskyflyer/)).

// Author: Igor Dimitrijević (@igorskyflyer)

/**
 * Special keywords that provide ways of using special colors.
 * @see https://drafts.csswg.org/css-cascade/#defaulting-keywords
 * @since v1.0.0
 */
export type SpecialColor =
  | 'currentcolor'
  | 'inherit'
  | 'initial'
  | 'transparent'
  | 'unset'

/**
 * A set of system-defined color keywords that correspond to system UI elements, which can adapt based on the user's operating system and theme settings.
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/system-color
 * @since v1.0.0
 */
export type SystemColor =
  | 'AccentColor'
  | 'AccentColorText'
  | 'ActiveText'
  | 'ButtonBorder'
  | 'ButtonFace'
  | 'ButtonText'
  | 'Canvas'
  | 'CanvasText'
  | 'Field'
  | 'FieldText'
  | 'GrayText'
  | 'Highlight'
  | 'HighlightText'
  | 'LinkText'
  | 'Mark'
  | 'MarkText'
  | 'SelectedItem'
  | 'SelectedItemText'
  | 'VisitedText'

/**
 * Common and standardized color identifiers.
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/named-color
 * @since v1.0.0
 */
export type NamedStandardColor =
  | 'aqua'
  | 'black'
  | 'blue'
  | 'fuchsia'
  | 'gray'
  | 'green'
  | 'lime'
  | 'maroon'
  | 'navy'
  | 'olive'
  | 'purple'
  | 'red'
  | 'silver'
  | 'teal'
  | 'white'
  | 'yellow'

/**
 * Includes all of the common standardized colors with the addition of 131 colors more.
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/named-color
 * @since v1.0.0
 */
export type NamedExtendedColor =
  | NamedStandardColor
  | 'aliceblue'
  | 'antiquewhite'
  | 'aquamarine'
  | 'azure'
  | 'beige'
  | 'bisque'
  | 'blanchedalmond'
  | 'blueviolet'
  | 'brown'
  | 'burlywood'
  | 'cadetblue'
  | 'chartreuse'
  | 'chocolate'
  | 'coral'
  | 'cornflowerblue'
  | 'cornsilk'
  | 'crimson'
  | 'cyan'
  | 'darkblue'
  | 'darkcyan'
  | 'darkgoldenrod'
  | 'darkgray'
  | 'darkgreen'
  | 'darkgrey'
  | 'darkkhaki'
  | 'darkmagenta'
  | 'darkolivegreen'
  | 'darkorange'
  | 'darkorchid'
  | 'darkred'
  | 'darksalmon'
  | 'darkseagreen'
  | 'darkslateblue'
  | 'darkslategray'
  | 'darkturquoise'
  | 'darkviolet'
  | 'deeppink'
  | 'deepskyblue'
  | 'dimgray'
  | 'dimgrey'
  | 'dodgerblue'
  | 'firebrick'
  | 'floralwhite'
  | 'forestgreen'
  | 'gainsboro'
  | 'ghostwhite'
  | 'gold'
  | 'goldenrod'
  | 'greenyellow'
  | 'grey'
  | 'honeydew'
  | 'hotpink'
  | 'indianred'
  | 'indigo'
  | 'ivory'
  | 'khaki'
  | 'lavender'
  | 'lavenderblush'
  | 'lawngreen'
  | 'lemonchiffon'
  | 'lightblue'
  | 'lightcoral'
  | 'lightcyan'
  | 'lightgoldenrodyellow'
  | 'lightgray'
  | 'lightgreen'
  | 'lightgrey'
  | 'lightpink'
  | 'lightsalmon'
  | 'lightseagreen'
  | 'lightskyblue'
  | 'lightslategray'
  | 'lightslategrey'
  | 'lightsteelblue'
  | 'lightyellow'
  | 'limegreen'
  | 'linen'
  | 'magenta'
  | 'mediumaquamarine'
  | 'mediumblue'
  | 'mediumorchid'
  | 'mediumpurple'
  | 'mediumseagreen'
  | 'mediumslateblue'
  | 'mediumspringgreen'
  | 'mediumturquoise'
  | 'mediumvioletred'
  | 'midnightblue'
  | 'mintcream'
  | 'mistyrose'
  | 'moccasin'
  | 'navajowhite'
  | 'oldlace'
  | 'olivedrab'
  | 'orange'
  | 'orangered'
  | 'orchid'
  | 'palegoldenrod'
  | 'palegreen'
  | 'paleturquoise'
  | 'palevioletred'
  | 'papayawhip'
  | 'peachpuff'
  | 'peru'
  | 'pink'
  | 'plum'
  | 'powderblue'
  | 'rebeccapurple'
  | 'rosybrown'
  | 'royalblue'
  | 'saddlebrown'
  | 'salmon'
  | 'sandybrown'
  | 'seagreen'
  | 'seashell'
  | 'sienna'
  | 'skyblue'
  | 'slateblue'
  | 'slategray'
  | 'slategrey'
  | 'snow'
  | 'springgreen'
  | 'steelblue'
  | 'tan'
  | 'thistle'
  | 'tomato'
  | 'turquoise'
  | 'violet'
  | 'wheat'
  | 'whitesmoke'
  | 'yellowgreen'

/**
 * A notation for describing the hexadecimal color syntax of an sRGB color using its primary color components (red, green, blue) written as hexadecimal numbers, as well as its transparency.
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/hex-color
 * @since v1.0.0
 */
export type HexColor = `#${string}`
/**
 * The rgb() functional notation expresses a color in the sRGB color space according to its red, green, and blue components.
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/rgb
 * @since v1.0.0
 */
export type RgbColor = `rgb(${string})`
/**
 * The rgba() functional notation expresses a color in the sRGB color space according to its red, green, blue and alpha (transparency) components.
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/rgb
 * @since v1.0.0
 */
export type RgbaColor = `rgba(${string})`
/**
 * The hsl() functional notation expresses a color in the sRGB color space according to its hue, saturation, and lightness components. An optional alpha component represents the color's transparency
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/hsl
 * @since v1.0.0
 */
export type HslColor = `hsl(${string})`
/**
 * The hwb() functional notation expresses a color in the sRGB color space according to its hue, whiteness, and blackness. An optional alpha component represents the color's transparency.
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/hwb
 * @since v1.0.0
 */
export type HwbColor = `hwb(${string})`
/**
 * The lab() functional notation expresses a given color in the CIE L\*a\*b\* color space.
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/lab
 * @since v1.0.0
 */
export type LabColor = `lab(${string})`
/**
 * The lch() functional notation expresses a given color using the LCH color space, which represents lightness, chroma, and hue. It uses the same L axis as the lab() color function of the CIELab color space, but it uses the polar coordinates C (Chroma) and H (Hue).
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/lch
 * @since v1.0.0
 */
export type LchColor = `lch(${string})`
/**
 * The oklab() functional notation expresses a given color in the Oklab color space, which attempts to mimic how color is perceived by the human eye.
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/oklab
 * @since v1.0.0
 */
export type OklabColor = `oklab(${string})`
/**
 * The oklch() functional notation expresses a given color in the Oklab color space. oklch() is the cylindrical form of oklab(), using the same L axis, but with polar Chroma (C) and Hue (h) coordinates.
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/oklch
 * @since v1.0.0
 */
export type OklchColor = `oklch(${string})`
/**
 * The light-dark() CSS <color> function enables setting two colors for a property - returning one of the two colors options by detecting if the developer has set a light or dark color scheme or the user has requested light or dark color theme - without needing to encase the theme colors within a prefers-color-scheme media feature query.
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/light-dark
 * @since v1.0.0
 */
export type LightDarkColor = `light-dark(${string})`
/**
 * The color-mix() functional notation takes two <color> values and returns the result of mixing them in a given colorspace by a given amount.
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/color-mix
 * @since v1.0.0
 */
export type ColorMix = `color-mix(${string})`
/**
 * The device-cmyk() functional notation is used to express CMYK colors in a device dependent way, specifying the cyan, magenta, yellow, and black components.
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/device-cmyk
 * @since v1.2.0
 */
export type DeviceCmyk = `device-cmyk(${string})`
/**
 * The contrast-color() functional notation identifies a sufficiently contrasting color against a specified background or foreground color without requiring manual computation.
 * @see https://drafts.csswg.org/css-color-6/#colorcontrast
 * @since v1.3.0
 */
export type ColorContrast = `color-contrast(${string})`

/**
 * The linear-gradient() CSS function creates an image consisting of a progressive transition between two or more colors along a straight line. Its result is an object of the <gradient> data type, which is a special kind of <image>.
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/linear-gradient
 * @since v1.1.0
 */
export type LinearGradient = `linear-gradient(${string})`
/**
 * The radial-gradient() CSS function creates an image consisting of a progressive transition between two or more colors that radiate from an origin. Its shape may be a circle or an ellipse. The function's result is an object of the <gradient> data type, which is a special kind of <image>.
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/radial-gradient
 * @since v1.1.0
 */
export type RadialGradient = `radial-gradient(${string})`
/**
 * The conic-gradient() CSS function creates an image consisting of a gradient with color transitions rotated around a center point (rather than radiating from the center). Example conic gradients include pie charts and color wheels. The result of the conic-gradient() function is an object of the <gradient> data type, which is a special kind of <image>.
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/conic-gradient
 * @since v1.1.0
 */
export type ConicGradient = `conic-gradient(${string})`

/**
 * The repeating-linear-gradient() CSS function creates an image consisting of repeating linear gradients. It is similar to linear-gradient() and takes the same arguments, but it repeats the color stops infinitely in all directions so as to cover its entire container. The function's result is an object of the <gradient> data type, which is a special kind of <image>.
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/repeating-linear-gradient
 * @since v1.1.0
 */
export type RepeatingLinearGradient = `repeating-linear-gradient(${string})`
/**
 * The repeating-radial-gradient() CSS function creates an image consisting of repeating gradients that radiate from an origin. It is similar to radial-gradient() and takes the same arguments, but it repeats the color stops infinitely in all directions so as to cover its entire container, similar to repeating-linear-gradient(). The function's result is an object of the <gradient> data type, which is a special kind of <image>.
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/repeating-radial-gradient
 * @since v1.1.0
 */
export type RepeatingRadialGradient = `repeating-radial-gradient(${string})`
/**
 * The repeating-conic-gradient() CSS function creates an image consisting of a repeating gradient (rather than a single gradient) with color transitions rotated around a center point (rather than radiating from the center).
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/repeating-conic-gradient
 * @since v1.1.0
 */
export type RepeatingConicGradient = `repeating-conic-gradient(${string})`

/**
 * The <color> CSS data type represents a color. A <color> may also include an alpha-channel transparency value, indicating how the color should composite with its background.
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color_value
 * @since v1.0.0
 */
export type Color =
  | NamedStandardColor
  | NamedExtendedColor
  | HexColor
  | RgbColor
  | RgbaColor
  | HslColor
  | HwbColor
  | LabColor
  | LchColor
  | OklabColor
  | OklchColor
  | LightDarkColor
  | ColorMix
  | DeviceCmyk
  | LinearGradient
  | RadialGradient
  | ConicGradient
  | RepeatingLinearGradient
  | RepeatingRadialGradient
  | RepeatingConicGradient

/**
 * The <color> CSS data type represents a color. A <color> may also include an alpha-channel transparency value, indicating how the color should composite with its background.
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color_value
 * @since v1.0.0
 */
export type ColorWithKeywords = Color | SpecialColor
/**
 * The <color> CSS data type represents a color. A <color> may also include an alpha-channel transparency value, indicating how the color should composite with its background.
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color_value
 * @since v1.0.0
 */
export type ColorExtended = ColorWithKeywords | SystemColor

/**
 * A CSS color module level 3 type that defines color types for Hex, named, RGB(A), HSL and system colors, defaulting keywords and repeating and non-repeating linear and radial gradients.
 * @see https://www.w3.org/TR/css-color-3/
 * @see https://www.w3.org/TR/css-images-3/
 * @since v1.2.0
 */
export type CssLevel3Color =
  | HexColor
  | RgbColor
  | NamedStandardColor
  | RgbaColor
  | HslColor
  | SystemColor
  | NamedExtendedColor
  | SpecialColor
  | LinearGradient
  | RadialGradient
  | RepeatingLinearGradient
  | RepeatingRadialGradient
/**
 * A CSS color module level 4 type that builts on top of CSS color module level 3 and defines color types for Hwb, Lab, Lch, Oklab and Oklch colors, as well as conic gradient and repeating conic gradient.
 * @see https://www.w3.org/TR/css-color-4/
 * @see https://www.w3.org/TR/css-images-4/
 */
export type CssLevel4Color =
  | CssLevel3Color
  | HwbColor
  | LabColor
  | LchColor
  | OklabColor
  | OklchColor
  | ConicGradient
  | RepeatingConicGradient
/**
 *
 * @see
 * @since v1.2.0
 */
export type CssLevel5Color =
  | CssLevel4Color
  | LightDarkColor
  | DeviceCmyk
  | ColorMix
/**
 *
 * @see
 * @since v1.3.0
 */
export type CssLevel6Color = CssLevel5Color | ColorContrast

// Author: Igor Dimitrijević (@igorskyflyer)

/** @since v1.0.0 */
export type SpecialColor =
  | 'currentcolor'
  | 'inherit'
  | 'initial'
  | 'transparent'
  | 'unset'

/** @since v1.0.0 */
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

/** @since v1.0.0 */
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

/** @since v1.0.0 */
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

/** @since v1.0.0 */
export type HexColor = `#${string}`
/** @since v1.0.0 */
export type RgbColor = `rgb(${string})`
/** @since v1.0.0 */
export type RgbaColor = `rgba(${string})`
/** @since v1.0.0 */
export type HslColor = `hsl(${string})`
/** @since v1.0.0 */
export type HwbColor = `hwb(${string})`
/** @since v1.0.0 */
export type LabColor = `lab(${string})`
/** @since v1.0.0 */
export type LchColor = `lch(${string})`
/** @since v1.0.0 */
export type OklabColor = `oklab(${string})`
/** @since v1.0.0 */
export type OklchColor = `oklch(${string})`
/** @since v1.0.0 */
export type LightDarkColor = `light-dark(${string})`
/** @since v1.0.0 */
export type ColorMix = `color-mix(${string})`

/** @since v1.1.0 */
export type LinearGradient = `linear-gradient(${string})`
/** @since v1.1.0 */
export type RadialGradient = `radial-gradient(${string})`
/** @since v1.1.0 */
export type ConicGradient = `conic-gradient(${string})`

/** @since v1.1.0 */
export type RepeatingLinearGradient = `repeating-linear-gradient(${string})`
/** @since v1.1.0 */
export type RepeatingRadialGradient = `repeating-radial-gradient(${string})`
/** @since v1.1.0 */
export type RepeatingConicGradient = `repeating-conic-gradient(${string})`

/** @since v1.0.0 */
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
  | LinearGradient
  | RadialGradient
  | ConicGradient
  | RepeatingLinearGradient
  | RepeatingRadialGradient
  | RepeatingConicGradient

/** @since v1.0.0 */
export type ColorWithKeywords = Color | SpecialColor
/** @since v1.0.0 */
export type ColorExtended = ColorWithKeywords | SystemColor

// Author: Igor Dimitrijević (@igorskyflyer)

export type SpecialColor =
  | 'currentcolor'
  | 'transparent'
  | 'initial'
  | 'inherit'
  | 'unset'

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

export type NamedStandardColor =
  | 'black'
  | 'silver'
  | 'gray'
  | 'white'
  | 'maroon'
  | 'red'
  | 'purple'
  | 'fuchsia'
  | 'green'
  | 'lime'
  | 'olive'
  | 'yellow'
  | 'navy'
  | 'blue'
  | 'teal'
  | 'aqua'

export type NamedExtendedColor =
  | NamedStandardColor
  | 'aliceblue'
  | 'antiquewhite'
  | 'aqua'
  | 'aquamarine'
  | 'azure'
  | 'beige'
  | 'bisque'
  | 'black'
  | 'blanchedalmond'
  | 'blue'
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
  | 'darkslategrey'
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
  | 'gray'
  | 'green'
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
  | 'lime'
  | 'limegreen'
  | 'linen'
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
  | 'red'
  | 'rosybrown'
  | 'royalblue'
  | 'saddlebrown'
  | 'salmon'
  | 'sandybrown'
  | 'seagreen'
  | 'seashell'
  | 'sienna'
  | 'silver'
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
  | 'yellow'
  | 'yellowgreen'

export type HexColor = `#${string}`
export type RgbColor = `rgb(${string})`
export type RgbaColor = `rgba(${string})`
export type HslColor = `hsl(${string})`
export type HwbColor = `hwb(${string})`
export type LabColor = `lab(${string})`
export type LchColor = `lch(${string})`
export type OklabColor = `oklab(${string})`
export type OklchColor = `oklch(${string})`
export type LightDarkColor = `light-dark(${string})`
export type ColorMix = `color-mix(${string})`

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

export type ColorWithKeywords = Color | SpecialColor
export type ColorExtended = ColorWithKeywords | SystemColor

export type LinearGradient = `linear-gradient(${string})`
export type RadialGradient = `radial-gradient(${string})`
export type ConicGradient = `conic-gradient(${string})`

export type RepeatingLinearGradient = `repeating-linear-gradient(${string})`
export type RepeatingRadialGradient = `repeating-radial-gradient(${string})`
export type RepeatingConicGradient = `repeating-conic-gradient(${string})`

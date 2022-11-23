import { IrObject } from "@/objects/object";
import { number2color } from "@/utils/number2color";

const defaultOptions: ITextOptions = {
  text: "test",
  x: 0,
  y: 0,
  z: 0,
  size: 14,
  pos: "naka",
  posX: "naka",
  posY: "naka",
  color: 0,
  bold: false,
  visible: true,
  filter: "",
  alpha: 0,
  mover: "",
};

class IrText extends IrObject {
  options: ITextOptions;
  constructor(
    _context: CanvasRenderingContext2D,
    _options: ITextOptionsNullable
  ) {
    super(_context, _options);
    this.options = { ...Object.assign(defaultOptions, _options) };
    this.__parsePos();
    this.__updateStyle();
    this.__draw();
  }

  get size() {
    return this.options.size;
  }

  set size(val) {
    this.options.size = val;
  }

  get text() {
    return this.options.text;
  }

  set text(val) {
    this.options.text = val;
  }

  get bold() {
    return this.options.bold;
  }

  set bold(val) {
    this.options.bold = val;
  }

  get filter() {
    return this.options.filter;
  }

  set filter(val) {
    this.options.filter = val;
  }

  __updateStyle() {
    this.__context.font = `normal 600 ${this.size}px Arial, "ＭＳ Ｐゴシック", "MS PGothic", MSPGothic, MS-PGothic`;
    this.__context.fillStyle = number2color(this.color);
  }

  __draw() {
    this.__updateStyle();
    this.__context.fillText(this.text, 0, this.size);
  }

  draw() {
    this.targetContext.drawImage(this.__canvas, this.__x, this.__y);
  }
}
export { IrText };

export class Tag {
  static readonly ANGULAR = new Tag('Angular', 'red');
  static readonly TYPESCRIPT = new Tag('TypeScript', 'dark-red');
  static readonly NODEJS = new Tag('Node.JS', 'brown');
  static readonly JAVASCRIPT = new Tag('JavaScrip', 'orange');
  static readonly REACT = new Tag('React', 'blue');
  static readonly EXPRESS = new Tag('Express.JS', 'yellow');
  static readonly HTML = new Tag('HTML', 'gray');
  static readonly CSS = new Tag('CSS', 'pink');
  static readonly VITE = new Tag('Vite.', 'red');
  static readonly NEXT = new Tag('Next.JS', 'purple');
  static readonly VUEJS = new Tag('Vue.JS', 'gray');
  static readonly THREEJS = new Tag('Three.JS', 'cyan');
  static readonly TAILWIND = new Tag('Tailwind', 'cyan');





  private constructor(
    private readonly key: string,
    public readonly color: string
  ) {}

  toString() {
    return this.key;
  }
}

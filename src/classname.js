const NAMING = {
  e: '__',
  m: '_',
  v: '_'
}

const ClassName = {
  name: 'classname',
  props: {
    block: {
      type: String,
    },
    elem: {
      type: String,
    },
    mods: {
      type: Object,
    },
    tag: {
      type: String,
      default: 'div'
    },
    attrs: {
      type: Object,
    }
  },
  methods: {
    getClassObj() {
      const modsObj = {};
      let baseClassName = '';

      if (!this.block) {
        this.block = this.$parent.$props.block;
      }

      baseClassName = this.block;

      // если элемент блока
      if (this.elem) {
        baseClassName = `${this.block}${NAMING.e}${this.elem}`;
      }

      // если есть модификаторы
      if (this.mods && typeof this.mods === 'object') {
        Object.keys(this.mods).map((key) => {
          let modClassName = `${baseClassName}${NAMING.m}${key}`;

          // если модификатор со значением
          if (typeof this.mods[key] !== 'boolean') {
            modClassName = `${modClassName}${NAMING.m}${this.mods[key]}`;
          }
          modsObj[modClassName] = true;
        });
      }

      // TODO обработка mix

      return {
        [baseClassName]: true,
        ...modsObj,
      }
    }
  },
  render(createElement) {
    return createElement(
      this.tag,
      {
        class: this.getClassObj(),
        attrs: this.attrs
      },
      this.$slots.default,
    )
  }
}

export default {
  install (Vue) {
    Vue.component('cn', ClassName)
  }
}
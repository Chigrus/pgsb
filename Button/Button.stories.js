import PgButton from './Button.vue';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Атомы/Кнопка',
  component: PgButton,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    primary: { description: 'Активная/неактивная кнопка' },
    label: { description: 'Название кнопки' },
    backgroundColor: { control: 'color', description: 'Цвет залика кнопки' },
    onClick: {},
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'Размер кнопки'
    },
  },
  parameters: {
    docs: {
      description: {
        component: "Описание для кнопки проекта <br><br> <h4>Интеграция</h4><hr><span>Импортировать компонент в приложение:</span><br><br><code>import PgButton from '/pgsb/Button/Button.vue'</code><br><br><span>Добавить компонент:</span><br><br><code>PgButton</code><br><br><span>Добавить код шаблона:</span>",
      },
    },
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { PgButton },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<pg-button v-bind="args" />',
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Primary.args = {
  primary: true,
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};

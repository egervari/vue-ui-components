import Vue from 'vue';

import Actions from './Actions.vue';
import Button from './Button.vue';
import Emphasis from './Emphasis.vue';
import ErrorMessage from './ErrorMessage.vue';
import FormField from './FormField.vue';
import FormGroup from './FormGroup.vue';
import Label from './Label.vue';
import Pane from './Pane.vue';
import PaneHeader from './PaneHeader.vue';
import SectionHeader from './SectionHeader.vue';

const components = {
  Actions,
  Button,
  Emphasis,
  ErrorMessage,
  FormField,
  FormGroup,
  Label,
  Pane,
  PaneHeader,
  SectionHeader,
};

Object.keys(components)
  .forEach(name => Vue.component(name, components[name]));

export default components;

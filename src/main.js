// import { createApp } from 'vue'

// import App from './App.vue'

// createApp(App).mount('#app')
import { createApp } from 'vue'
import {
  Layout,
  Button,
  Spin,
  Result,
  Card,
  Divider,
  Col,
  Row,
  Drawer,
  Table,
  Form,
  InputNumber,
  Tag,
  Menu,
  Steps,
  Tabs,
  Input,
  DatePicker,
  Select,
 
 
  
   
} from 'ant-design-vue';
import App from './App.vue'
import router from './router'

const app = createApp(App).use(router).use(router);
app.config.productionTip = false;
app.use(Layout);
app.use(Button);
app.use(Spin);
app.use(Result);
app.use(Card);
app.use(Divider);
app.use(Col);
app.use(Row);
app.use(Drawer);
app.use(Table);
app.use(Form);
app.use(InputNumber);
app.use(Tag);
app.use(Menu);
app.use(Steps);
app.use(Tabs);
app.use(Input);
app.use(DatePicker);
app.use(Select);


app.mount('#app');
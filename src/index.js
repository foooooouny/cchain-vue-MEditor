import './assets/css/font-awesome.css'
/* 引入reset文件 */
import './assets/css/reset.css'
/* 引入github的markdown样式文件 */
import './assets/css/github_markdown.css'
/* 引入atom的代码高亮样式文件 */
import './assets/css/atom_one_dark.css'

import Vue from 'vue'
import scroll from 'vue-scroll'
import Editor from './components/meditor.vue'

Vue.use(scroll)

export default Editor
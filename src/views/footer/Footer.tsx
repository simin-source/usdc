import jump from 'jump.js';
import { defineComponent, Fragment } from 'vue';


import {
    copy, link, pc,leftBox
} from './Footer.module.scss';

enum PageType {
    INDEX = 'index',
    DESCRIPTION = 'description',
    SOLUTION = 'solution',
    CONTACT = 'contact',
    ABOUT = 'about',
}
let Data = [{name:'开发者', },{name:'公司名', },{name:'联系方式',},{name:'语言切换',}]
let FooterData = [{label:'Mantax'},{label:'亚链有限公司'},{ label:'邮箱'},{ label:'简体中文/繁体中文'}]
export default defineComponent({
    name: 'Footer',
    props: {
        parent: {
            validator: (prop: string) => {
                return ['index'].includes(prop);
            },
            default: 'index',
            required: true,
        },
    },
    data() {
        return {
            isWcMinibox: false,
            phoneMiniBox: false,
            userName: '',
            userPhone: '',
            userEmail: '',
            userMessage: '',
            isRequiredMessage: false,
            requiredMessage: '',
        };
    },
    methods: {
        scrollTo(maoId: string) {
            const maoDom = document.getElementById(maoId);
            if (maoDom) {
                const pos = maoDom.offsetTop - 72; //当前视图的偏移量
                jump('body', {
                    duration: 1500,
                    offset: pos,
                });
            }
        },
    },
    render() {
        let urlChoice = './';
        if (this.parent === PageType.INDEX) {
            urlChoice = './';
        } else if (this.parent === PageType.DESCRIPTION || this.parent === PageType.SOLUTION || this.parent === PageType.CONTACT || this.parent === PageType.ABOUT) {
            urlChoice = '../';
        }
        return (
            <Fragment>
                <div style={{ width: '100%', height: '100%', background: '#042053' }}>
                    <div class={`container link_ ${link}`}>
                        <div class={`content flex-start ${pc}`}>
                            <div class="flex-between" style={{ display: 'flex', flexDirection:'column'}}>
                                {Data.map(e => {
                                    return <div class={leftBox}> 
                                        <dt style={{marginBottom:'10px'}}>{ e.name}</dt>
                                    </div>
                                })}
                                
                        
                            </div>
                            <div style={{ display: 'flex', flexDirection:'column'}}>
                            {FooterData.map(e => {
                                     return <div class={leftBox}> 
                                     <dt style={{marginBottom:'10px'}}>{ e.label}</dt>
                                 </div>
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div class={`container copy_ ${copy}`}>
                    <div class="content">
                        <div>xxxx.com版权所有</div>
                    </div>
                </div> */}
            </Fragment >
        );
    },
});
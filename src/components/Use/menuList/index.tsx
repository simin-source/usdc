
import { defineComponent ,Fragment,reactive} from 'vue';

import { invest_card, left, left_right, menu, navbar, right, selector,card_box ,card,title,section} from './index.module.scss';
export const Movingtab = reactive({
    activeKey: '' as string,
    menuList: [] as any,
});
const intoData = [
    {
        title: '入金、出金、存储、全球支付、全球汇款、全球收款',
        des: 'Circle 账户提供了一个以 USDC 进行支付和存储资金的平台，并将资金分配到收益产品中。Circle 账户使企业能即时地在全球范围内向任何与区块链兼容的数字钱包进行支付和接收付款，为传统的银行支付提供一个高效且便宜的替代方案，目前已覆盖 90 多个国家的银行。开设Circle账户请访问链接。',
        link: 'https://app.circle.com/signup',
    },{
        title: '投资',
        des: '企业可以使用USDC在各种中心化和去中心化交易所、借贷平台、质押平台、流动性平台、收益聚合平台、NFT交易市场等加密货币市场进行投资赚取收益。详细请看USDC投资指南。',
        link: `/investment/?fan=&from=use&item=投资页`,
    }, {
        title: '借贷',
        des: '企业可以在各种中心化和去中心的借贷平台进行借贷，无需提供大量的抵押品和身份认证，直接借出USDC或其他数字货币来进行各种商业活动。详细请看USDC投资指南中“借贷”板块。',
        link: `/investment/?fan=&from=use&item=借贷`,
    }, {
        title: '慈善&救灾',
        des: '全球的捐助者正在利用 USDC 为慈善事业和救灾筹集资金。      ',
        link: `/investment/?fan=&from=intoout&item=慈善`,
    }, {
        title: '众筹&筹款',
        des: 'USDC的易于访问性使得人们可以快速进行互联网原生的资本筹集来回应重要的事业。在开源区块链上使用USDC筹集资金和发送捐赠，为任何公司的审计追踪提供了前所未有的清晰度，并帮助员工用更少的资源做更多的事情。。',
        link: `/investment/?fan=&from=intoout&item=众筹`,
    },
];
const individualData = [
    {
        title: '存储',
        des: '未开设Circle账户的企业及个人可以将USDC存入加密货币钱包中。',
        link: '/investment/?fan=&from=intoout&item=钱包',
    },{
        title: '投资',
        des: '未开设Circle账户的企业及个人可以使用USDC在各种中心化和去中心化交易所、借贷平台、质押平台、流动性平台、收益聚合平台、NFT交易市场等加密货币市场进行投资赚取收益。详细请看USDC投资指南。',
        link: `/investment/?fan=&from=use&item=投资页`,
    }, {
        title: '借贷',
        des: '未开设Circle账户的企业及个人可以在各种中心化和去中心的借贷平台进行借贷，无需提供大量的抵押品和身份认证，直接借出USDC或其他数字货币来进行各种商业活动。详细请看USDC投资指南中“借贷”板块。',
        link: `/investment/?fan=&from=use&item=借贷`,
    }, {
        title: '全球转账、支付',
        des: '通过加密货币钱包、交易所等应用，可高效、低成本地使用USDC进行24/7全天候、全球支付、汇款与收款。 ',
        link: `/investment/?fan=&from=intoout&item=慈善`,
    }, {
        title: '消费',
        des: '一些在线商家和服务提供商已经开始接受数字货币支付，包括使用USDC进行购物、支付订阅费用、支付线上广告费用、支付游戏、参加在线赌博等等。',
        link: `/investment/?fan=&from=intoout&item=消费`,
    },{
        title: '捐款',
        des: '全球的捐助者正在利用 USDC 为慈善事业和救灾筹集资金。',
        link: `/investment/?fan=&from=intoout&item=消费`,
    },{
        title: '众筹',
        des: 'USDC的易于访问性使得人们可以快速进行互联网原生的资本筹集来回应重要的事业。',
        link: `/investment/?fan=&from=intoout&item=众筹`,
    },
];
export default defineComponent({
    name: 'MenuListUse',
    data() {
        return {
            s_width: '110px',
            s_left: '250px',
            current_index: 1,
        };
    },
    render() {
        return <Fragment>
            <div class={invest_card} >
            <div class={navbar}>
                    <div class={menu}>
                        <div style={{ color: `${this.current_index === 1 ? '#5160CE' : '#fff'}` }} onClick={() => {
                            this.current_index = 1;
                            this.s_width = '110px';
                            this.s_left = '250px';
                            
                        }}>企业</div>
                        <div style={{ color: `${this.current_index === 2 ? '#5160CE' : '#fff'}` }} onClick={() => {
                            this.current_index = 2;
                            this.s_width = '110px';
                            this.s_left = '850px';
                        }}>个人</div>
                    
                    </div>
                    <div class={selector} style={{ width: `${this.s_width}`, left: `${this.s_left}` }}>
                        <div class={left}></div>
                        <div class={right}></div>
                    </div>
                </div>
            </div>
            <div class={`flex-center ${left_right}`}>
                <div v-show={this.current_index == 1}>
                    <div style={{  width: '100%', height:'auto' , position:'relative' ,paddingTop: '50px', paddingBottom: '80px' }}>
                            <div class="content flex-center"style={{ width: '100%',  maxWidth: '1210px',  minWidth: '990px', margin: '0 auto',     flexDirection: 'column'}}>
                            <div class={`flex-between ${section}`} style={{ flexWrap: 'wrap',  alignItems: 'center'}}>
                            {intoData.map(item => {
                                return <div class={card} style={{ boxSizing: 'border-box',width: '48%', height: '300px',
                                    padding: '30px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-around',
                                    boxShadow: '0 0 10px rgba(159, 114, 255, 0.12)',
                                    borderRadius: '10px',
                                    marginBottom: '20px'}}>
                                    <h2>{item.title}</h2>
                                    <p>{item.des}</p>
                                </div>
                            })}
                        </div>
                            </div>
                    </div>
            
                </div>
                <div v-show={this.current_index == 2}>
                <div style={{  width: '100%', height:'auto' , position:'relative' ,paddingTop: '50px', paddingBottom: '80px' }}>
                            <div class="content flex-center"style={{ width: '100%',  maxWidth: '1210px',  minWidth: '990px', margin: '0 auto',     flexDirection: 'column'}}>
                            <div class={`flex-between ${section}`} style={{ flexWrap: 'wrap',  alignItems: 'center'}}>
                            {individualData.map(item => {
                                return <div class={card} style={{ boxSizing: 'border-box',width: '48%', height: '300px',
                                    padding: '30px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-around',
                                    boxShadow: '0 0 10px rgba(159, 114, 255, 0.12)',
                                    borderRadius: '10px',
                                    marginBottom: '20px'}}>
                                    <h2>{item.title}</h2>
                                    <p>{item.des}</p>
                                </div>
                            })}
                        </div>
                            </div>
                    </div>
            
              </div>
             </div>
        </Fragment>
           
    }
});

import { FooterState } from '@/views/footer/Footer';
import { defineComponent, reactive, Fragment, watch,ref } from 'vue';
import { ChevronDown, ChevronUpOutline} from '@vicons/ionicons5'
import { Icon } from '@vicons/utils'
import { card, invest_card, left, left_right, menu, navbar, right, section, selector, use_box,title } from './index.module.scss';
export const Movingtab = reactive({
    activeKey: '' as string,
    menuList: [] as any,
});


const companyData = [
    {
        title: '入金、出金、存储、全球支付、全球汇款、全球收款',
        des: 'Circle 账户提供了一个以 USDC 进行支付和存储资金的平台，并将资金分配到收益产品中。Circle 账户使企业能即时地在全球范围内向任何与区块链兼容的数字钱包进行支付和接收付款，为传统的银行支付提供一个高效且便宜的替代方案，目前已覆盖 90 多个国家的银行。开设Circle账户请访问链接。',
        link: 'https://app.circle.com/signup',
    }, {
        title: '投资',
        des: '企业可以使用USDC在各种中心化和去中心化交易所、借贷平台、质押平台、流动性平台、收益聚合平台、NFT交易市场等加密货币市场进行投资赚取收益。详细请看USDC投资指南。',
        link: '/investment/?fan=&from=use&item=投资页',
    }, {
        title: '借贷',
        des: '企业可以在各种中心化和去中心的借贷平台进行借贷，无需提供大量的抵押品和身份认证，直接借出USDC或其他数字货币来进行各种商业活动。详细请看USDC投资指南中“借贷”板块。',
        link: '/investment/?fan=&from=use&item=借贷',
    }, {
        title: '慈善&救灾',
        des: '全球的捐助者正在利用 USDC 为慈善事业和救灾筹集资金。      ',
        link: '/investment/?fan=&from=use&item=慈善',
    }, {
        title: '众筹&筹款',
        des: 'USDC的易于访问性使得人们可以快速进行互联网原生的资本筹集来回应重要的事业。在开源区块链上使用USDC筹集资金和发送捐赠，为任何公司的审计追踪提供了前所未有的清晰度，并帮助员工用更少的资源做更多的事情。。',
        link: '/investment/?fan=&from=use&item=众筹',
    },
];
const companyData2 = [
    {
        title: '入金、出金、存儲、全球支付、全球匯款、全球收款',
        des: 'Circle 賬戶提供了一個以 USDC 進行支付和存儲資金的平臺，並將資金分配到收益產品中。Circle 賬戶使企業能即時地在全球範圍內向任何與區塊鏈兼容的數字錢包進行支付和接收付款，為傳統的銀行支付提供一個高效且便宜的替代方案，目前已覆蓋 90 多個國家的銀行。開設Circle賬戶請訪問鏈接。',
        link: 'https://app.circle.com/signup',
    }, {
        title: '投資',
        des: '企業可以使用USDC在各種中心化和去中心化交易所、借貸平臺、質押平臺、流動性平臺、收益聚合平臺、NFT交易市場等加密貨幣市場進行投資賺取收益。詳細請看USDC投資指南。',
        link: '/investment/?fan=&from=use&item=投資頁',
    }, {
        title: '借貸',
        des: '企業可以在各種中心化和去中心的借貸平臺進行借貸，無需提供大量的抵押品和身份認證，直接借出USDC或其他數字貨幣來進行各種商業活動。詳細請看USDC投資指南中「借貸」板塊。',
        link: '/investment/?fan=&from=use&item=借貸',
    }, {
        title: '慈善&救災',
        des: '全球的捐助者正在利用 USDC 為慈善事業和救災籌集資金。      ',
        link: '/investment/?fan=&from=use&item=慈善',
    }, {
        title: '眾籌&籌款',
        des: 'USDC的易於訪問性使得人們可以快速進行互聯網原生的資本籌集來回應重要的事業。在開源區塊鏈上使用USDC籌集資金和發送捐贈，為任何公司的審計追蹤提供了前所未有的清晰度，並幫助員工用更少的資源做更多的事情。。',
        link: '/investment/?fan=&from=use&item=眾籌',
    },
];
const individualData = [
    {
        title: '存储',
        des: '未开设Circle账户的企业及个人可以将USDC存入加密货币钱包中。',
        link: '/investment/?fan=&from=use&item=钱包',
    }, {
        title: '投资',
        des: '未开设Circle账户的企业及个人可以使用USDC在各种中心化和去中心化交易所、借贷平台、质押平台、流动性平台、收益聚合平台、NFT交易市场等加密货币市场进行投资赚取收益。详细请看USDC投资指南。',
        link: '/investment/?fan=&from=use&item=投资页',
    }, {
        title: '借贷',
        des: '未开设Circle账户的企业及个人可以在各种中心化和去中心的借贷平台进行借贷，无需提供大量的抵押品和身份认证，直接借出USDC或其他数字货币来进行各种商业活动。详细请看USDC投资指南中“借贷”板块。',
        link: '/investment/?fan=&from=use&item=借贷',
    }, {
        title: '全球转账、支付',
        des: '通过加密货币钱包、交易所等应用，可高效、低成本地使用USDC进行24/7全天候、全球支付、汇款与收款。 ',
        link: '/investment/?fan=&from=use&item=慈善',
    }, {
        title: '消费',
        des: '一些在线商家和服务提供商已经开始接受数字货币支付，包括使用USDC进行购物、支付订阅费用、支付线上广告费用、支付游戏、参加在线赌博等等。',
        link: '/investment/?fan=&from=use&item=消费',
    }, {
        title: '捐款',
        des: '全球的捐助者正在利用 USDC 为慈善事业和救灾筹集资金。',
        link: '/investment/?fan=&from=use&item=消费',
    }, {
        title: '众筹',
        des: 'USDC的易于访问性使得人们可以快速进行互联网原生的资本筹集来回应重要的事业。',
        link: '/investment/?fan=&from=use&item=众筹',
    },
];
const individualData2 = [
    {
        title: '存儲',
        des: '未開設Circle賬戶的企業及個人可以將USDC存入加密貨幣錢包中。',
        link: '/investment/?fan=&from=use&item=錢包',
    }, {
        title: '投資',
        des: '未開設Circle賬戶的企業及個人可以使用USDC在各種中心化和去中心化交易所、借貸平臺、質押平臺、流動性平臺、收益聚合平臺、NFT交易市場等加密貨幣市場進行投資賺取收益。詳細請看USDC投資指南。',
        link: '/investment/?fan=&from=use&item=投資頁',
    }, {
        title: '借貸',
        des: '未開設Circle賬戶的企業及個人可以在各種中心化和去中心的借貸平臺進行借貸，無需提供大量的抵押品和身份認證，直接借出USDC或其他數字貨幣來進行各種商業活動。詳細請看USDC投資指南中「借貸」板塊。',
        link: '/investment/?fan=&from=use&item=借貸',
    }, {
        title: '全球轉賬、支付',
        des: '通過加密貨幣錢包、交易所等應用，可高效、低成本地使用USDC進行24/7全天候、全球支付、匯款與收款。 ',
        link: '/investment/?fan=&from=use&item=慈善',
    }, {
        title: '消費',
        des: '一些在線商家和服務提供商已經開始接受數字貨幣支付，包括使用USDC進行購物、支付訂閱費用、支付線上廣告費用、支付遊戲、參加在線賭博等等。',
        link: '/investment/?fan=&from=use&item=消費',
    }, {
        title: '捐款',
        des: '全球的捐助者正在利用 USDC 為慈善事業和救災籌集資金。',
        link: '/investment/?fan=&from=use&item=消費',
    }, {
        title: '眾籌',
        des: 'USDC的易於訪問性使得人們可以快速進行互聯網原生的資本籌集來回應重要的事業。',
        link: '/investment/?fan=&from=use&item=眾籌',
    },
];
const currencyData = [
    {
        title: 'Circle API',
        des: '企业和品牌可使用 Circle API 来开发支持数字货币支付的产品，促进了 USDC 支付和一些其他功能。',
        link: 'https://www.circle.com/en/usdc/developers#usdc-multichain',
    },{
        title: 'Visa',
        des: 'Visa已经开始支持USDC作为结算货币，这是一个连接数字货币和法定货币的重要创举。Visa利用以太坊区块链，可以在20秒内完成USDC的交易，且几乎免费。Visa估计，每年有120万亿美元的支付是通过支票和电汇进行的，这些支付方式费用高昂且效率低下。Visa通过使用USDC，可以为商家和消费者提供更快速、更便宜、更透明的支付体验。',
        link: 'https://www.visa.com.ag/about-visa/newsroom/press-releases/visa-network-to-settle-transactions-in-usd-coin-usdc.html',
    },{
        title: 'Master Card',
        des: 'Master Card也支持了USDC',
        link: '#',
    },{
        title: '中心化交易所',
        des: '中心化交易所也为商家提供支付解决方案（如Coinbase Commerce、Binance Pay、Circle Pay），包括交易所托管的支付界面和帮助商家自行部署前端的API和SDK。商家和其客户使用同一交易所托管的钱包不会产生任何费率，因为钱款只是在同一托管钱包里的不同账户间转账。商家或其客户其中一方使用自托管钱包会产生区块链网络费，因为加密币会转账到另一个钱包地址。商家也可以选择在收款时把加密币自动转换成法币，并存在交易所托管的银行账户上或者直接存在商家自己的银行账户上。如果是后者，交易所需要帮商家开一个商业法币账户。',
        link: '/investment/?fan=&from=use&item=支付',
    },{
        title: '其他',
        des: '其他提供加密货币支付服务的公司。',
        link: '/investment/?fan=&from=use&item=支付',
    },
]
export default defineComponent({
    name: 'MenuListUse',
    data() {
        return {
            s_left: '186px',
            current_index: 1,
            contentList: FooterState.isFan ? companyData2 : companyData as any,
            fourCardsValue:false
        };
    },
    mounted() {
        watch(() => FooterState.isFan, newValue => {
            if (FooterState.isFan) {
                if (this.current_index === 1) {
                    this.contentList = companyData2;
                } else {
                    this.contentList = individualData2;
                }
            } else {
                if (this.current_index === 2) {
                    this.contentList = companyData;
                } else {
                    this.contentList = individualData;
                }
            }
        });
    },
    render() {
        return <div class={`container ${use_box}`}>
            <div class={`content flex-center ${invest_card}`} >
                <div class={navbar}>
                    <div class={menu}>
                        <div style={{ color: `${this.current_index === 1 ? '#5160CE' : '#fff'}` }} onClick={() => {
                            this.current_index = 1;
                            this.contentList = [];
                            this.s_left = '186px';
                            if (FooterState.isFan) {
                                this.contentList = companyData2;
                            } else {
                                this.contentList = companyData;
                            }
                        }}>企业</div>
                        <div style={{ color: `${this.current_index === 2 ? '#5160CE' : '#fff'}` }} onClick={() => {
                            this.current_index = 2;
                            this.contentList = [];
                            this.s_left = '780px';
                            if (FooterState.isFan) {
                                this.contentList = individualData2;
                            } else {
                                this.contentList = individualData;
                            }
                        }}>个人</div>
                    </div>
                    <div class={selector} style={{ left: `${this.s_left}` }}>
                        <div class={left}></div>
                        <div class={right}></div>
                    </div>
                </div>
                <div class={`flex-center ${left_right}`}>
                    <div>
                        <div style={{ width: '100%', height: 'auto', position: 'relative', paddingTop: '50px', paddingBottom: '80px' }}>
                            <div style={{ width: '100%', maxWidth: '1210px', minWidth: '990px', margin: '0 auto', flexDirection: 'column' }}>
                                <div class={`flex-between ${section}`} style={{ flexWrap: 'wrap', alignItems: 'center' }}>
                                    {this.contentList?.map((item: any) => {
                                        return <div class={card} style={{
                                            boxSizing: 'border-box', width: '48%', height: '300px',
                                            padding: '30px',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'space-between',
                                            boxShadow: '0 0 10px rgba(159, 114, 255, 0.12)',
                                            borderRadius: '10px',
                                            marginBottom: '20px',
                                        }}>
                                            <h2>{item.title}</h2>
                                            <p style={{ fontWeight: 'bold'}}>{item.des}</p>
                                            {!item.link.includes('fan') ? <a href={item.link} target="_blank" style={{display:'inline-block',marginTop: '10px',color:"#000", fontSize: '18px', fontWeight: 'bold'}}>更多</a>
                                                : <a style={{display:'inline-block',marginTop: '10px',color:"#000", fontSize: '18px', fontWeight: 'bold'}} href={item.link.replace('fan=', `fan=${FooterState.isFan}` )}>更多</a>}
                                        </div>;
                                    })}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div style={{ display: 'flex', flexDirection:'row',justifyContent:'space-between',width:"100%", boxShadow:' 0 0 10px rgba(159, 114, 255, 0.12)',height:'50px',padding:'0 10px',marginBottom: '20px',backgroundColor:'#F8F8FA'}}>
                    <h2 style={{ height: '50px', letterSpacing: '-.2px', fontWeight: 'bolder' ,padding:'5px 10px',lineHeight:'50px'}}> 给自己的产品接入数字货币支付</h2>
                    <div onClick={() => this.fourCardsValue = !this.fourCardsValue} style={{padding:'0 10px 0 0',lineHeight:'50px'}}>
                        {this.fourCardsValue? <Icon size='36' color='#000'>
                        <ChevronUpOutline></ChevronUpOutline>
                        </Icon> : <Icon size='36' color='#000'>
                            <ChevronDown></ChevronDown>
                     </Icon>
                   }
                       
                    </div>     
                    
                    {/* <i >加载更多</i> */}
                </div>
                {this.fourCardsValue ? <div style={{ width: '100%', height: 'auto', position: 'relative', borderRadius: '10px', backgroundColor: '#F8F8FA', padding:'10px'}}>
                    <div style={{ width: '100%', maxWidth: '1210px', minWidth: '990px', margin: '0 auto', flexDirection: 'column' }}>
                        <div class={`flex-between ${section}`} style={{ flexWrap: 'wrap', alignItems: 'center' }}>
                                {currencyData.map(item => {
                                    return <div class={card} style={{
                                        boxSizing: 'border-box', width: '100%', height: '260px',
                                        padding: '30px 10%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'space-between',
                                        boxShadow: '0 0 10px rgba(159, 114, 255, 0.12)',
                                        borderRadius: '10px',
                                        marginBottom: '20px',
                                        background:'white'
                                        
                                    }}>
                                        <h2>{item.title}</h2>
                                        <p style={{ fontWeight: 'bold'}}>{item.des}</p>
                                        {!item.link.includes('fan') ? <a href={item.link} target="_blank" style={{display:'inline-block',marginTop: '10px',color:"#000", fontSize: '18px', fontWeight: 'bold'}}>更多</a>
                                            : <a style={{display:'inline-block',marginTop: '10px',color:"#000", fontSize: '18px', fontWeight: 'bold'}} href={item.link.replace('fan=', `fan=${FooterState.isFan}`)}>更多</a>}
                                    </div>;
                                    
                                })}
                        </div>
                    </div>
                </div>: <div></div>}
               
            </div>
        </div>;
    },
});
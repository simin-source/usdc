import { defineComponent } from 'vue';
import {
    card_box, section, card, title
} from './index.module.scss';

import { DiamondOutline, EyeOutline,ShieldCheckmarkOutline,InfiniteOutline,ColorFilterOutline ,WalletOutline,FlashOutline,GlobeOutline} from '@vicons/ionicons5'
import { Icon } from '@vicons/utils'
let contairData = [{
    icon:'DiamondOutline',
    title: '稳定',
    text: 'USDC的货币发行量与美元的储备量一一对应，完全由现金和短期美国政府债务支持，因此其价值相对较为稳定，适用于作为数字资产间的价值转移媒介。',
}, {
    icon:'EyeOutline',
    title: '透明',
    text: '其货币发行过程透明，可以通过公开透明的方式进行审计。Circle 在官网每月披露 USDC 储备明细和托管商名单，接受所有投资者的监督。',
    }, {
    icon:'ShieldCheckmarkOutline',
    title: '安全',
    text: 'Circle 的 CFO 强调 USDC 的商业模式是“最小化风险”。其在储备的选择上比较保守，仅持有美元现金（25%）和短期美国政府债券（75%），均交由最世界领先的金融机构保管。',
    }, {
    icon:'InfiniteOutline',
    title: '广泛流通',
    text: '全球数以千计的应用、dApp 和企业都支持 USDC。DeFi 市场爆发，USDC 以其合规性在 DeFi 市场更受青睐。用户可以通过多个加密货币交易所和钱包进行购买、出售和交换，并且十分便捷地使用USDC进行支付和金融服务。',
    },
    { icon:'ColorFilterOutline',
        title: '跨链',
        text: 'USDC 原生支持8个区块链网络，通过跨链桥可支持任何其他区块链，这使得USDC的应用场景更加广泛。',
    }, { icon:'WalletOutline',
        title: '低成本',
        text: '相比传统银行转账、跨境汇款，使用USDC通过区块链网络直接转账无需中介费用、降低了转账费用。许多加密货币交易所和钱包甚至提供免费的USDC转账，进一步降低了转账成本。',
    }, { icon:'FlashOutline',
        title: '高效率',
        text: '相比传统银行转账，USDC转账通过区块链网络进行，只需几分钟，结算速度更快。而且可以24/7全天候、自动化地执行，十分高效。',
    }, { icon:'GlobeOutline',
        title: '全球通用无国界',
        text: 'USDC是一种基于区块链技术的数字货币，可以在全球范围内自由流通且不受任何国家的监管和限制。无论您身在何处，只要有互联网连接，就可以进行USDC转账，无需担心受到任何国家的限制和干扰。',
    }];

export default defineComponent({
    name: 'AeightCard',
    render() {
        return <div class={`container ${card_box}`}>
            <div class="content flex-center">
                <h3 class={title}>The token that is disrupting the global financial industry</h3>
                <div class={`flex-between ${section}`}>
                    {contairData.map(item => {
                                         if (item.icon == 'DiamondOutline') {
                                             return <>
                                            
                                                 <div class={card}>
                                                 <Icon size ='36' color='#d3b25b' >
                                                <DiamondOutline></DiamondOutline>
                                             </Icon>
                                             <h2>{item.title}</h2>
                                       <p>{item.text}</p>
                                   </div></>
                                        }else if(item.icon == 'EyeOutline'){
                                             return <>
                                             
                                                 <div class={card}>
                                                 <Icon size ='36' color='#d3b25b'>
                                                <EyeOutline></EyeOutline>
                                             </Icon>
                                                    <h2>{item.title}</h2>
                                                    <p>{item.text}</p>
                                                </div>
                                             </>  
                                             
                                     }else if(item.icon == 'ShieldCheckmarkOutline'){
                                             return <>
                                            
                                                 <div class={card}>
                                                 <Icon size ='36' color='#d3b25b'>
                                             <ShieldCheckmarkOutline></ShieldCheckmarkOutline>
                                             </Icon>
                                             <h2>{item.title}</h2>
                                             <p>{item.text}</p>
                                         </div></> 
                                 }else if(item.icon == 'InfiniteOutline'){
                                             return <>
                                             
                                                 <div class={card}>
                                                 <Icon size ='36' color='#d3b25b'>
                                                <InfiniteOutline></InfiniteOutline>
                                            </Icon>
                                                <h2>{item.title}</h2>
                                                <p>{item.text}</p>
                                            </div></>  
                                             
                             }else if(item.icon == 'ColorFilterOutline'){
                                return <>  
                                    <div class={card}>
                                    <Icon size ='36' color='#d3b25b'>
                                <ColorFilterOutline></ColorFilterOutline>
                                             </Icon>
                                                <h2>{item.title}</h2>
                                                <p>{item.text}</p>
                                            </div></>
                         }else if(item.icon == 'WalletOutline'){
                            return<>  
                                <div class={card}>
                                <Icon size ='36' color='#d3b25b'>
                            <WalletOutline></WalletOutline>
                                             </Icon>
                                               <h2>{item.title}</h2>
                                               <p>{item.text}</p>
                                           </div></>
                     }else if(item.icon == 'FlashOutline'){
                        return <> 
                            <div class={card}>
                            <Icon size ='36' color='#d3b25b'>
                        <FlashOutline></FlashOutline>
                        
                                         </Icon>
                                         <h2>{item.title}</h2>
                                         <p>{item.text}</p>
                                     </div></> 
                 }else if(item.icon == 'GlobeOutline'){
                    return <> 
                        <div class={card}>
                        <Icon size ='36' color='#d3b25b'>
                    <GlobeOutline></GlobeOutline>
                                             </Icon>
                                              <h2>{item.title}</h2>
                                              <p>{item.text}</p>
                                          </div></> 
             }
              
                    
                    })}
                </div>
            </div>
        </div>;
    },
});

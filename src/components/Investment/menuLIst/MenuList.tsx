import { InvestState } from '@/pages/investment/Index';
import { ElMenu, ElMenuItem, ElSubMenu } from 'element-plus';
import { defineComponent } from 'vue';
import {
    menu_box, menu_content
} from './MenuList.module.scss';
import MenuItem from './menuItem/MenuItem';

export default defineComponent({
    name: 'MenuList',
    render() {
        return <div class={menu_box}>
            <ElMenu class={menu_content} unique-opened={true} default-active={InvestState.activeKey}>
                {/* <h3 class={title}> Categories</h3> */}
                {InvestState.menuList.map((item: any) => {
                    if (item.children) {
                        return <ElSubMenu
                            index={item.key}
                            v-slots={{
                                title: () => (
                                    <div>{item.label}</div>
                                ),
                            }}
                        >
                            {item.children?.map((item_: any) => {
                                return <MenuItem key={item.key} item={item_} />;
                            })}
                        </ElSubMenu>;
                    } else {
                        return <ElMenuItem index={item.key} onClick={() => {
                            InvestState.activeKey = item.key;
                        }}>
                            {item.label}
                        </ElMenuItem>;
                    }
                })}
            </ElMenu>
        </div>;
    },
});
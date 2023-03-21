import { InvestState } from '@/pages/investment/Index';
import { Fragment } from '@vue/runtime-dom';
import { ElMenuItem, ElSubMenu } from 'element-plus';
import { defineComponent } from 'vue';
import MenuItem from '../menuItem/MenuItem';
export default defineComponent({
    name: 'MenuItem',
    data() {
        return {
        };
    },
    props: {
        item: {
            type: Object,
            required: true,
        },
        basePath: {
            type: String,
            default: '',
        },
    },
    render() {
        return <Fragment>
            {this.item.children ?
                <ElSubMenu class="sub_item" index={this.item.key}
                    v-slots={{
                        title: () => (
                            <div>{this.item.label}</div>
                        ),
                    }}
                >
                    {this.item.children?.map((item_: any) => {
                        return <MenuItem key={item_.key} item={item_} />;
                    })}
                </ElSubMenu> :
                <ElMenuItem index={this.item.key} onClick={() => {
                    InvestState.activeKey = this.item.key;
                }}>
                    {this.item.label}
                </ElMenuItem>
            }
        </Fragment>;
    },
});
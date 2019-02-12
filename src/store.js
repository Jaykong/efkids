import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    name: "",
    photo: "",
    country_count: 1,
    current_continent: ["亚洲"],
    current_country: ["中国"],
    continent: [
      {
        name: "亚洲",
        country: [
          "中国",
          "蒙古",
          "朝鲜",
          "韩国",
          "日本",
          "越南",
          "老挝",
          "柬埔寨",
          "缅甸",
          "泰国",
          "马来西亚",
          "新加坡",
          "文莱达",
          "菲律宾",
          "印度尼西亚",
          "东帝汶",
          "哈萨克",
          "吉尔吉斯",
          "乌兹别克",
          "塔吉克",
          "土库曼",
          "阿富汗",
          "巴基斯坦",
          "尼泊尔",
          "不丹",
          "印度",
          "孟加拉国",
          "斯里兰卡",
          "马尔代夫",
          "伊朗",
          "伊拉克",
          "科威特",
          "沙特阿拉伯",
          "巴林",
          "卡塔尔",
          "阿拉伯",
          "阿曼",
          "也门",
          "约旦",
          "巴勒斯坦",
          "以色列",
          "叙利亚",
          "黎巴嫩",
          "土耳其",
          "塞浦路斯",
          "阿塞拜疆",
          "格鲁吉亚",
          "亚美尼亚"
        ]
      },
      {
        name: "欧洲",
        country: [
          "冰岛",
          "巴德群岛",
          "法罗群岛",
          "丹麦",
          "挪威",
          "瑞典",
          "芬兰",
          "奥兰群岛",
          "爱沙尼亚",
          "拉脱维亚",
          "立陶宛",
          "爱尔兰",
          "英国",
          "根西",
          "泽西",
          "马恩岛",
          "法国",
          "荷兰",
          "比利时",
          "卢森堡",
          "德国",
          "奥地利",
          "瑞士",
          "列支敦士登",
          "葡萄牙",
          "西班牙",
          "直布罗陀",
          "安道尔",
          "摩纳哥",
          "意大利",
          "梵蒂冈",
          "马耳他",
          "圣马力诺",
          "希腊",
          "俄罗斯",
          "白俄罗斯",
          "乌克兰",
          "波兰",
          "捷克共和国",
          "斯洛伐克",
          "匈牙利",
          "斯洛文尼亚",
          "克罗地亚",
          "波斯",
          "波黑联邦",
          "塞族共和国",
          "塞尔维亚"
        ]
      },
      {
        name: "非洲",
        country: [
          "埃及",
          "苏丹",
          "利比亚",
          "突尼斯",
          "阿尔及利亚",
          "摩洛哥",
          "西撒哈拉",
          "毛里塔尼亚",
          "塞内加尔",
          "冈比亚",
          "马里",
          "布基纳法索",
          "佛得角",
          "几内亚比绍",
          "几内亚",
          "塞拉利昂",
          "利比里亚",
          "科特迪瓦",
          "加纳",
          "多哥",
          "贝宁",
          "尼日尔",
          "尼日利亚",
          "圣赫勒拿",
          "喀麦隆",
          "赤道几内亚",
          "乍得",
          "中非共和国",
          "加蓬",
          "刚果布",
          "刚果金",
          "圣多美",
          "安哥拉",
          "厄立特里亚",
          "埃塞俄比亚",
          "吉布提",
          "索马里",
          "肯尼亚",
          "乌干达",
          "坦桑尼亚",
          "卢旺达",
          "布隆迪",
          "马拉维",
          "莫桑比克",
          "马达加斯加",
          "塞舌尔",
          "科摩罗",
          "马约特",
          "毛里求斯",
          "留尼汪",
          "赞比亚",
          "津巴布韦",
          "博茨瓦纳",
          "纳米比亚",
          "南非",
          "莱索托",
          "斯威士兰"
        ]
      },
      {
        name: "北美洲",
        country: [
          "美国",
          "墨西哥",
          "加拿大",
          "安圭拉",
          "安提瓜",
          "巴巴多斯",
          "巴哈马",
          "百慕大",
          "巴拿马",
          "波多黎各",
          "伯利兹",
          "阿鲁巴",
          "波内赫",
          "多米尼加",
          "多米尼克",
          "法属圣马丁",
          "格林纳达",
          "哥斯达黎加",
          "瓜德罗普",
          "古巴",
          "海地",
          "荷属圣马丁",
          "洪都拉斯",
          "开曼群岛",
          "库拉索",
          "马提尼克",
          "美属维尔京",
          "蒙塞拉特岛",
          "尼加拉瓜",
          "萨巴岛",
          "萨尔瓦多",
          "圣巴泰勒米",
          "圣基茨",
          "圣卢西亚",
          "圣皮埃尔",
          "圣文森特",
          "圣尤斯特",
          "特克斯",
          "特立尼达",
          "危地马拉",
          "牙买加",
          "英属维尔京"
        ]
      },
      {
        name: "南美洲",
        country: [
          "阿根廷",
          "巴拉圭",
          "巴西",
          "秘鲁",
          "玻利维亚",
          "厄瓜多尔",
          "法属圭亚那",
          "福克兰群岛",
          "哥伦比亚",
          "圭亚那",
          "苏里南",
          "委内瑞拉",
          "乌拉圭",
          "智利"
        ]
      },
      {
        name: "大洋洲",
        country: [
          "澳大利亚",
          "新西兰",
          "巴布亚新",
          "所罗门群岛",
          "斐济群岛",
          "瓦努阿图",
          "新喀里多尼亚",
          "北马里亚纳",
          "关岛",
          "密克罗尼西亚",
          "帕劳",
          "马绍尔群岛",
          "基里巴斯",
          "瑙鲁",
          "图瓦卢",
          "瓦利斯",
          "托克劳",
          "萨摩亚",
          "美属萨摩亚",
          "美属太平洋小岛",
          "汤加",
          "纽埃",
          "库克群岛",
          "法属波利尼西亚",
          "皮特凯恩岛"
        ]
      }
    ]
  },
  mutations: {
    onInputName(state, name) {
      state.name = name;
    },
    onGetPhoto(state, photo) {
      state.photo = photo;
    },
    onSelectCountry(state, item) {
      const name = item.name;
      const country = item.country;

      if (state.current_country.includes(country)) {
        const index = state.current_country.indexOf(country);
        state.current_country.splice(index, 1);

        const index_name = state.current_continent.indexOf(name);
        state.current_continent.splice(index_name, 1);
      } else {
        state.current_country.push(country);
        state.current_continent.push(name);
      }

      const country_count = state.current_country.length;
      state.country_count = country_count;
    }
  },
  actions: {}
});

<template>
  <div class="detail-parameter" v-if="itemParamsRuleTable.length !== 0">
    <div class="key">{{ itemParamsInfo.key }}</div>
    <table class="set" v-for="(item) in itemParamsInfoSet" :key="item.key">
      <tr>
        <td class="td1">{{ item.key }}</td>
        <td class="td2">{{ item.value }}</td>
      </tr>
    </table>
    <div class="key">{{ itemParamsRule.key }}</div>
    <table
      class="rule"
      v-for="(item, index) in itemParamsRuleTable"
      :key="index"
    >
      <tr  v-for="(RuleItem, RuleIndex) in item" :key="RuleIndex">
        <td
          v-for="(RuleItemTd, RuleIndexTd) in RuleItem"
          :key="RuleIndexTd"
        >
          {{ RuleItemTd }}
        </td>
      </tr>
    </table>
    <div class="ikey">{{ itemParamsRule.desc }}</div>
  </div>
</template>

<script>
export default {
  name: "DetailParameter",
  props: {
    itemParamsInfo: {
      type: Object,
      default() {
        return {};
      },
    },
    itemParamsInfoSet: {
      type: Array,
      default() {
        return [];
      },
    },
    itemParamsRule: {
      type: Object,
      default() {
        return {};
      },
    },
    itemParamsRuleTable: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped>
.key {
  text-align: center;
  padding: 10px 0;
  font-size: 16px;
}
.set {
  padding: 0 5px;
}
.rule td {
  font-size: 14px;
  width: 30vw;
  height: 10vw;
}
.detail-parameter table tr td {
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
}
.td1,
.td2 {
  font-size: 15px;
}
.td1 {
  width: 30vw;
  height: 10vw;
}
.td2 {
  color: var(--color-high-text);
  width: 60vw;
}
.ikey {
  padding: 20px 3px;
  font-size: 14px;
  border-bottom: 5px solid rgba(100, 100, 100, 0.1);
}
</style>

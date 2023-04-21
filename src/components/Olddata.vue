
<template>
  <br />
  <br />
  <a-table :columns="columns" :data-source="data">
    <template #name="{ text }">
      <a>{{ text }}</a>
    </template>
    <template #customTitle>
      <span> TicketNo </span>
    </template>
  </a-table>
</template>
<script>
import { defineComponent } from "vue";
const columns = [
  {
    title: "RowID",
    dataIndex: "RowID",
    key: "RowID",
  },
  {
    dataIndex: "TicketNo",
    key: "TicketNo",
    slots: {
      title: "customTitle",
      customRender: "TicketNo",
    },
  },
  {
    title: "RegisterNo",
    dataIndex: "RegisterNo",
    key: "RegisterNo",
  },
  {
    title: "DateStamp",
    dataIndex: "DateStamp",
    key: "DateStamp",
  },
  {
    title: "TicketFine",
    dataIndex: "TicketFine",
    key: "TicketFine",
  },
  {
    title: "DateAccident",
    dataIndex: "DateAccident",
    key: "DateAccident",
  },
  // {
  //   title: "Address",
  //   dataIndex: "address",
  //   key: "address",
  // },
];
const data = [
  {
    key: "10",
    RowID: "10",
    TicketNo: "070100369733",
    RegisterNo: "3ฒย7564",
    DateStamp: "26/03/2023",
    TicketFine: "60.00",
    DateAccident: "09/03/2023",
    TimeAccident: "16:50:39",
  },
];
export default defineComponent({
  setup() {
    return {
      data,
      columns,
    };
  },
  components: {},
});
</script>





<template>
  <br />
  <br />
  <a-table :columns="columns" :data-source="data">
    <template #name="{ text }">
      <a>{{ text }}</a>
    </template>
    <template #customTitle>
      <span>
        <smile-outlined />
        TicketNo
      </span>
    </template>
    <template #tags="{ text: tags }">
      <span>
        <a-tag
          v-for="tag in tags"
          :key="tag"
          :color="
            tag === 'false' ? 'volcano' : tag.length > 5 ? 'geekblue' : 'green'
          "
        >
          {{ tag.toUpperCase() }}
        </a-tag>
      </span>
    </template>
    <template #action="{ edit }">
      <span>
        <a>{{ edit }}</a>
        <a-divider type="vertical" />
        <router-link to="/Editcompo" class="card-footer-item">Edit</router-link>
      </span>
    </template>
  </a-table>
</template>
<script>
import { SmileOutlined } from "@ant-design/icons-vue";
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
  {
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
    slots: {
      customRender: "tags",
    },
  },
  {
    title: "Action",
    key: "action",
    slots: {
      customRender: "action",
    },
  },
];
const data = [
  {
    key: "1",
    RowID: "1",
    TicketNo: "070100383144",
    RegisterNo: "2ฒส8978",
    DateStamp: "26/03/2023",
    TicketFine: "330.00",
    DateAccident: "14/03/2023",
    TimeAccident: "09:48:07",
    tags: ["Verify"],
  },
  {
    key: "2",
    RowID: "2",
    TicketNo: "070100383169",
    RegisterNo: "3ขน5206",
    DateStamp: "26/03/2023",
    TicketFine: "660.00",
    DateAccident: "14/03/2023",
    TimeAccident: "09:25:05",
    tags: ["Verify"],
  },
  {
    key: "3",
    RowID: "3",
    TicketNo: "070100383162",
    RegisterNo: "9ขน4823",
    DateStamp: "26/03/2023",
    TicketFine: "660.00",
    DateAccident: "14/03/2023",
    TimeAccident: "10:00:08",
    tags: ["Verify"],
  },
  {
    key: "4",
    RowID: "4",
    TicketNo: "070100383179",
    RegisterNo: "1ขน6407",
    DateStamp: "26/03/2023",
    TicketFine: "660.00",
    DateAccident: "14/03/2023",
    TimeAccident: "16:23:14",
    tags: ["Verify"],
  },
  {
    key: "5",
    RowID: "5",
    TicketNo: "070100383164",
    RegisterNo: "3ฒภ7124",
    DateStamp: "26/03/2023",
    TicketFine: "660.00",
    DateAccident: "14/03/2023",
    TimeAccident: "12:16:00",
    tags: ["Verify"],
  },
  {
    key: "6",
    RowID: "6",
    TicketNo: "070100369720",
    RegisterNo: "8กค7034",
    DateStamp: "26/03/2023",
    TicketFine: "330.00",
    DateAccident: "09/03/2023",
    TimeAccident: "15:54:29",
    tags: ["Verify"],
  },
  {
    key: "7",
    RowID: "7",
    TicketNo: "070100369730",
    RegisterNo: "3ขถ8653",
    DateStamp: "26/03/2023",
    TicketFine: "330.00",
    DateAccident: "09/03/2023",
    TimeAccident: "10:16:26",
    tags: ["Verify"],
  },
  {
    key: "8",
    RowID: "8",
    TicketNo: "070100369729",
    RegisterNo: "6กช5351",
    DateStamp: "26/03/2023",
    TicketFine: "330.00",
    DateAccident: "09/03/2023",
    TimeAccident: "13:05:19",
    tags: ["Verify"],
  },
  {
    key: "9",
    RowID: "9",
    TicketNo: "070100369723",
    RegisterNo: "1ขส8415",
    DateStamp: "26/03/2023",
    TicketFine: "330.00",
    DateAccident: "09/03/2023",
    TimeAccident: "07:42:04",
    tags: ["Verify"],
  },
  {
    key: "10",
    RowID: "10",
    TicketNo: "070100369733",
    RegisterNo: "3ฒย7564",
    DateStamp: "26/03/2023",
    TicketFine: "330.00",
    DateAccident: "09/03/2023",
    TimeAccident: "16:50:39",
    tags: ["NICE"],
  },
];
export default defineComponent({
  setup() {
    return {
      data,
      columns,
    };
  },
  components: {
    SmileOutlined,
  },
});
</script>


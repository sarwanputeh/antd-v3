<!-- <template>
  <div class="about">
    <Verify />
  </div>
</template>

<script>
export default {
  name: "Verify",
  components: {},
};
</script> -->
<template>
  <br />
  <br />
  <a-table :columns="columns" :data-source="dataSource" bordered>
    <template
      v-for="col in [
        'rowID',
        'TicketNo',
        'RegisterNo',
        'DateStamp',
        'TicketFine',
        'DateAccident',
        'TimeAccident',
        'PlacInciden',
      ]"
      #[col]="{ text, record }"
      :key="col"
    >
      <div>
        <a-input
          v-if="editableData[record.key]"
          v-model:value="editableData[record.key][col]"
          style="margin: -5px 0"
        />
        <template v-else>
          {{ text }}
        </template>
      </div>
    </template>
    <template #operation="{ record }">
      <div class="editable-row-operations">
        <span v-if="editableData[record.key]">
          <a @click="save(record.key)">Save</a>
          <a-popconfirm title="Sure to cancel?" @confirm="cancel(record.key)">
            <a>Cancel</a>
          </a-popconfirm>
        </span>
        <span v-else>
          <a @click="edit(record.key)">Edit</a>
        </span>
      </div>
    </template>
  </a-table>
</template>
<script>
import { cloneDeep } from "lodash-es";
import { defineComponent, reactive, ref } from "vue";
const columns = [
  {
    title: "rowID",
    dataIndex: "rowID",
    width: "10%",
    slots: {
      customRender: "rowID",
    },
  },
  {
    title: "TicketNo",
    dataIndex: "TicketNo",
    width: "15%",
    slots: {
      customRender: "TicketNo",
    },
  },
  {
    title: "address",
    dataIndex: "address",
    width: "30%",
    slots: {
      customRender: "address",
    },
  },
  {
    title: "DateStamp",
    dataIndex: "DateStamp",
    with: "25%",
    slots: {
      customRender: "DateStamp",
    },
  },
  {
    title: "TicketFine",
    dataIndex: "TicketFine",
    width: "25%",
    slots: {
      customRender: "TicketFine",
    },
  },
  {
    title: "TimeAccident",
    dataIndex: "TimeAccident",
    width: "25%",
    slots: {
      customRender: "TimeAccident",
    },
  },
  {
    title: "operation",
    dataIndex: "operation",
    slots: {
      customRender: "operation",
    },
  },
];
const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    rowID: i.toString(),
    TicketNo: `00000${i}`,
    RegisterNo: `บพ ${i}`,
    address: `London Park no. ${i}`,
    DateStamp: "2023-04-10",
    TicketFine: "660",
    TimeAccident: `13:${i}`,
  });
}
export default defineComponent({
  setup() {
    const dataSource = ref(data);
    const editableData = reactive({});
    const edit = (key) => {
      editableData[key] = cloneDeep(
        dataSource.value.filter((item) => key === item.key)[0]
      );
    };
    const save = (key) => {
      Object.assign(
        dataSource.value.filter((item) => key === item.key)[0],
        editableData[key]
      );
      delete editableData[key];
    };
    const cancel = (key) => {
      delete editableData[key];
    };
    return {
      dataSource,
      columns,
      editingKey: "",
      editableData,
      edit,
      save,
      cancel,
    };
  },
});
</script>
<style scoped>
.editable-row-operations a {
  margin-right: 8px;
}
</style>
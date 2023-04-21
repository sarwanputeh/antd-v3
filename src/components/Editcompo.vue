
<template>
  <br />
  <br />
  <Card>
    <div class="columns">
      <div class="column"></div>
      <div class="column">
        <a-form
          ref="formRef"
          :model="formState"
          :rules="rules"
          :label-col="labelCol"
          :wrapper-col="wrapperCol"
        >
          <a-form-item ref="RowID" label="RowID" name="RowID">
            <a-input value="10" />
          </a-form-item>
          <a-form-item ref="TicketNO" label="TicketNO" name="TicketNO">
            <!-- <a-input v-model:value="formState.TicketNO" /> -->
            <a-input v-model:value="formState.TicketNO" />
            <!-- v-model:value="formState.TicketNO"
              placeholder="070100369733" -->
          </a-form-item>

          <a-form-item ref="RegisterNo" label="RegisterNo" name="RegisterNo">
            <a-input
              v-model:value="formState.RegisterNo"
              placeholder="3ฒย7564"
            />
          </a-form-item>
          <a-form-item ref="DataStamp" label="DataStamp" name="DataStamp">
            <a-input
              v-model:value="formState.DataStamp"
              placeholder="26/03/2023"
            />
          </a-form-item>
          <a-form-item ref="TicketFine" label="TicketFine" name="TicketFine">
            <a-input v-model:value="formState.TicketFine" placeholder="60" />
          </a-form-item>
          <a-form-item
            ref="DateAccident"
            label="DateAccident"
            name="DateAccident"
          >
            <a-input
              v-model:value="formState.DateAccident"
              placeholder="09/03/2023"
            />
          </a-form-item>

          <!-- <a-form-item label="Activity zone" name="region">
      <a-select
        v-model:value="formState.region"
        placeholder="please select your zone"
      >
        <a-select-option value="shanghai">Zone one</a-select-option>
        <a-select-option value="beijing">Zone two</a-select-option>
      </a-select>
    </a-form-item> -->

          <!-- <a-form-item label="Instant delivery" name="delivery">
      <a-switch v-model:checked="formState.delivery" />
    </a-form-item> -->

          <!-- <a-form-item label="Activity form" name="desc">
      <a-textarea v-model:value="formState.desc" />
    </a-form-item> -->

          <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
            <!-- <router-link to="/Result" class="card-footer-item" a-button
        >Save</router-link
      > -->
            <a-button type="primary" @click="$router.push('/Result')"
              >Save</a-button
            >
            <!-- <button router-link to="/Result" class="card-footer-item">Save</button> -->
            <a-button style="margin-left: 10px" @click="resetForm"
              >Clear</a-button
            >
          </a-form-item>
        </a-form>
      </div>
      <div class="column"></div>
    </div>
  </Card>
</template>
<script>
import { Card } from "ant-design-vue";
import { defineComponent, reactive, ref, toRaw } from "vue";

export default defineComponent({
  setup() {
    const formRef = ref();
    const formState = reactive({
      TicketNO: " ",
      region: undefined,
      date1: undefined,
      delivery: false,
      type: [],
      resource: "",
      desc: "",
    });
    const rules = {
      RowID: [
        {
          required: false,
          message: "Please input",
          trigger: "blur",
        },
      ],
      TicketNO: [
        {
          //   required: true,
          message: "Please input TicketNO",
          trigger: "blur",
        },
        {
          min: 12,
          max: 12,
          message: "TicketNo should  be a 12 digit number.",
          trigger: "blur",
        },
      ],
      TicketFine: [
        {
          required: true,
          message: "Please input TicketFine",
          trigger: "blur",
        },
        {
          min: 3,
          max: 6,
          message: "Ticket Fine should  be 330 up.",
          trigger: "blur",
        },
      ],
      region: [
        {
          required: true,
          message: "Please select Activity zone",
          trigger: "change",
        },
      ],
      date1: [
        {
          required: true,
          message: "Please pick a date",
          trigger: "change",
          type: "object",
        },
      ],
      type: [
        {
          type: "array",
          required: true,
          message: "Please select at least one activity type",
          trigger: "change",
        },
      ],
      resource: [
        {
          required: true,
          message: "Please select activity resource",
          trigger: "change",
        },
      ],
      desc: [
        {
          required: true,
          message: "Please input activity form",
          trigger: "blur",
        },
      ],
    };
    const onSubmit = () => {
      formRef.value
        .validate()
        .then(() => {
          console.log("values", formState, toRaw(formState));
        })
        .catch((error) => {
          console.log("error", error);
        });
    };
    const resetForm = () => {
      formRef.value.resetFields();
    };
    return {
      formRef,
      labelCol: {
        span: 4,
      },
      wrapperCol: {
        span: 14,
      },
      other: "",
      formState,
      rules,
      onSubmit,
      resetForm,
    };
  },
  components: { Card },
});
</script>


<!-- <template>
  <a-space direction="vertical">
    <a-date-picker v-model:value="value2" :format="dateFormatList" />
  </a-space>
</template>
<script>
import moment from 'moment';
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
 
    const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];
    return {

      value1: ref(moment('01/01/2015', dateFormatList[0])),

   
  
      dateFormatList,
  
    };
  },
});
</script> --> 






<template>
    <el-button :plain="true" @click="tests">错误</el-button>
</template>
  
<script>
export default {
    methods: {
        tests() {
            this.$message.error('错了哦，这是一条错误消息');
        }
    }
}
</script>
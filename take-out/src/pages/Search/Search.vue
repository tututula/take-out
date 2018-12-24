<template>
    <div >
        <header>
            <el-row>
                <el-col >
                    <span style="color:white ">搜索</span>
                </el-col>
            </el-row>
        </header>
        <el-row>
            <el-col >
                <el-input
                        placeholder="请输入内容"
                        prefix-icon="el-icon-search"
                        >
                </el-input>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "Search"
    }
</script>

<style scoped>
    .search{
        height: 50px;
        background: red;
        vertical-align: middle;
        display: flex;
        align-items: center;
        justify-content:center ;
    }
    header{
        height: 50px;
        background: red;
        vertical-align: middle;
        display: flex;
        align-items: center;
        justify-content:center ;
    }
</style>
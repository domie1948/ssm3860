const base = {
    get() {
        return {
            url : "http://localhost:8080/ssm12q44/",
            name: "ssm12q44",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/ssm12q44/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "自习室预订座位管理"
        } 
    }
}
export default base

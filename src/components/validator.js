let formValiidator = {
	userName: {
		rules: [
			{ required: true, message: '请输入用户名!' }
		]
	},
	password:{
        rules: [{ required: true, message: '请输入密码!' }]
    },
	remember:{
	    valuePropName: 'checked',
	    initialValue: true,
	}
}
export default formValiidator ;
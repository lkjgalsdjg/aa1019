// ========== 原有课堂JS基础代码（保留）==========
// 区分大小写
let a = 10;
console.log(a)
let A = 20
console.log(A)

// 弱类型变量,同一个变量数据类型动态变化
let b = 30
console.log(typeof(b))
b = "hello"
console.log(typeof(b))

// TypeScript语言的由来
// 为了了解决JavaScript的弱类型问题,引入了类型检查,在编译时检查变量的类型,防止运行时错误

// 常用函数
// let name = prompt("请输入姓名:")
// console.log(name)
// console.log(typeof(name))

// let age = prompt("请输入年龄:")
// console.log(age)
// console.log(typeof(age))
// age = parseFloat(age)
// console.log(age)
// console.log(typeof(age))

// confirm("确认吗?")
// alert("测试")

// 模板字符串: 可以在字符串中嵌入变量,实现动态输出
let name2 = "niewei"
let age2 = 16
// alert(`我的名字是${name2}，我今年${age2}岁。`)

// 字符串对象: 提供了字符串的常用方法,如长度、索引、拼接等
let str1 = "NieWei"
console.log(str1.length)
console.log(`字符串长度为：${str1.length}。`)
let char1 = str1.charAt(0)
console.log(`字符串第一个字符为：${char1}。`)
let subStr1 = str1.slice(0,3)
console.log(`字符串前3个字符为：${subStr1}。`)
let subStr2 = str1.substring(0,3)
console.log(`字符串前3个字符为：${subStr2}。`)
let find1 = str1.indexOf("i")
console.log(`字符串中第一个i的索引为：${find1}。`)
let find2 = str1.lastIndexOf("i")
console.log(`字符串中最后一个i的索引为：${find2}。`)

// ========== 课堂讨论 BMI 代码（新增，作业核心）==========
// 1. prompt 输入：体重kg、身高m
let weightInput = prompt("请输入你的体重（单位：KG）");
let heightInput = prompt("请输入你的身高（单位：m）");

// 2. 检查原始输入的数据类型（prompt返回一定是字符串string）
console.log("原始体重输入值：", weightInput, "，类型：", typeof weightInput);
console.log("原始身高输入值：", heightInput, "，类型：", typeof heightInput);

// 3. 转为浮点数字
let weight = parseFloat(weightInput);
let height = parseFloat(heightInput);

// 4. 判断输入是否合法（isNaN）
if(isNaN(weight) || isNaN(height) || weight <=0 || height <=0){
    alert("输入不合法！请输入有效的数字！");
}else{
    // BMI公式：BMI = 体重(kg) / 身高(m)²
    let bmi = weight / (height * height);
    // 保留2位小数
    bmi = bmi.toFixed(2);

    console.log("=====BMI计算结果=====");
    console.log("体重：", weight, "kg");
    console.log("身高：", height, "m");
    console.log("你的BMI值为：", bmi);

    // confirm弹窗确认是否查看结果
    let isShow = confirm(`计算完成，你的BMI=${bmi}，是否弹窗展示？`);
    if(isShow){
        alert(`✅ BMI结果：
体重：${weight} KG
身高：${height} m
BMI = ${bmi}`);
    }
}

/*import carousel from './Carousel.js'
import { addClass, removeClass } from '../../../common/js/api.js'

carousel();*/

var userNickname = document.getElementsByClassName('userNickname')[0],
    domPassword = document.getElementsByClassName('password')[0],
    nicknameError = userNickname.nextElementSibling,
    tipsContainer = document.getElementsByClassName('tipsContainer')[0],
    btnSubmit = document.getElementsByClassName('submit')[0],
    lianghaoSearch = document.getElementsByClassName('lianghao-search')[0],
    liangaoInput = lianghaoSearch.getElementsByTagName('input')[0],
    domPasswordLevel = document.getElementsByClassName('password-level')[0],
    checkbox = document.querySelector(".checkbox>input");


// 从cookie中获取用户名和密码自动填充
if (document.cookie) {
    let cookieArr = document.cookie.split("&")
    userNickname.value = cookieArr[0].slice(cookieArr[0].indexOf("=") + 1)
    domPassword.value = cookieArr[1].slice(cookieArr[1].indexOf("=") + 1)
    toggleLabel(userNickname)
    toggleLabel(domPassword)
}

// 使用一个对象来放 数字、大小写字母、下划线的Unicode码范围
var passwordUnicodeLimit = {
    "num": [48, 57],
    "alphaSup": [65, 90],
    "alphaSub": [97, 122],
    "specialCharacter": [95, 95]
}


// 必须是字母、数字、字符(_) 至少2种组合
var regPassword = /^(?![_]+$)(?![0-9]+$)(?![a-zA-Z]+$)[0-9a-zA-Z_]{8,16}$/;
//                    字母和数字   字母和_      数字和_


// 设置hash数组 来标识 用户名 密码 以及 密码 三种要求 的匹配结果 必须四项都为true 才能提交
var regResultArr = [];
regResultArr['nickName'] = false
regResultArr['passwordSpace'] = false
regResultArr['passwordLength'] = false
regResultArr['passwordVariable'] = false

// 使用一个 hash 数组来装要匹配密码的三个规则
var hashPassword = [];
hashPassword['passwordSpace'] = /^(?![\s]+$)[0-9a-zA-Z_]*$/;
hashPassword['passwordLength'] = /^[0-9a-zA-Z_]{8,16}$/;
hashPassword['passwordVariable'] = /^(?![_]+$)(?![0-9]+$)(?![a-zA-Z]+$)[0-9a-zA-Z_]{1,}$/;

userNickname.onfocus = function () {
    userNickname.style.borderColor = '#3487ff'
    nicknameError.style.height = "0"
}


domPassword.onfocus = function () {

    var inputCorrect = this.nextElementSibling.nextElementSibling;

    inputCorrect.style.display = 'none'


    tipsContainer.style.display = 'block'

    tipsContainer.style.height = '94px'
    this.style.borderColor = '#3487ff'
    this.nextElementSibling.style.height = '0'

    var _self = this;
    checkPassword(this)
    window.addEventListener('keyup', function () {
        checkPassword(_self)
    })


}

userNickname.onblur = checkNickName

domPassword.onblur = function () {
    var password = this.value,
        inputCorrect = this.nextElementSibling.nextElementSibling

    domPasswordLevel.style.display = "none"

    tipsContainer.style.height = 0
    this.previousElementSibling.style.display = 'none'
    var error = this.nextElementSibling

    if (password.length == 0) {
        domPassword.style.borderColor = '#ff5b5b'
        error.style.height = '18px'
        error.innerText = '密码不能为空'
        inputCorrect.style.display = 'none'
        return;
    }


    tipsContainer.style.display = 'none'
    tipsContainer.style.height = '0'

    var regPasswordResult = regPassword.test(password)

    if (regPasswordResult) {
        inputCorrect.style.display = 'block'

    } else {
        inputCorrect.style.display = 'none'

        error.style.height = '18px'
        domPassword.style.borderColor = '#ff5b5b'

        if (!regResultArr['passwordSpace']) {
            error.innerText = tipsContainer.getElementsByClassName('tips')[0].innerText
        } else if (!regResultArr['passwordLength']) {
            error.innerText = tipsContainer.getElementsByClassName('tips')[1].innerText
        } else if (!regResultArr['passwordVariable']) {
            error.innerText = tipsContainer.getElementsByClassName('tips')[2].innerText
        }
    }

}

btnSubmit.onclick = function () {
    checkPassword(domPassword)
    checkNickName()

    if (!(regResultArr['nickName'] && regResultArr['passwordSpace'] && regResultArr['passwordSpace'] && regResultArr['passwordVariable'])) {
        console.log(regResultArr)
        return false
    }

    // 新增cookie 保存用户名 和 密码 部分
    if (checkbox.checked) {

        let nickName = userNickname.value,
            password = domPassword.value,
            now = new Date().getTime() + 1000 * 3600 * 24 * 30,
            end = new Date(now);

        document.cookie = `QQ_nickName=${nickName}&QQ_password=${password};expires=${end.toGMTString()}`
    }


}


liangaoInput.oninput = function () {
    toggleLabel(this)
}

userNickname.oninput = function () {
    toggleLabel(this)
}


domPassword.oninput = function () {
    toggleLabel(this)
}


function toggleLabel(ele) {
    var label = ele.previousElementSibling;
    if (ele) {
        var userInput = ele.value;
        if (userInput.length == 0) {
            label.style.display = 'block'
        } else {
            label.style.display = 'none'
        }
    }
}

function checkPassword(ele) {
    var _self = ele,
        tips = document.getElementsByClassName('tips');

    var password = _self.value,
        i = -1;

    for (var k in hashPassword) {
        i = i == tips.length ? 0 : ++i;
        if (hashPassword[k].test(password)) {
            regResultArr[k] = true;
            addClass(tips[i], 'correct');
        } else {
            regResultArr[k] = false;
            removeClass(tips[i], 'correct')
        }
    }

    // 密码强度检测
    checkStrength(_self)

}

function checkNickName() {
    var inputCorret = this.nextElementSibling.nextElementSibling

    if (this.value.length == 0) {
        nicknameError.style.height = "18px"
        this.style.borderColor = '#ff5b5b'
        regResultArr['nickName'] = false
        inputCorret.style.display = 'none'

    } else {
        inputCorret.style.display = 'block'
        this.style.borderColor = '#aaa'
        nicknameError.style.height = "0"
//        nickName = true;
        regResultArr['nickName'] = true

    }
}

function checkStrength(ele) {

    var password = ele.value;
    if (regResultArr['passwordSpace'] && regResultArr['passwordLength'] && regResultArr['passwordVariable']) {
        domPasswordLevel.style.display = 'block'

        var numNum = 0,
            alphaSupNum = 0,
            alphaSubNum = 0,
            specialNum = 0;

        for (var j = 0; j < password.length; j++) {
            if (password.charCodeAt(j) >= passwordUnicodeLimit.num[0] && password.charCodeAt(j) <= passwordUnicodeLimit.num[1]) {
                numNum++
            }

            if (password.charCodeAt(j) >= passwordUnicodeLimit.alphaSub[0] && password.charCodeAt(j) <= passwordUnicodeLimit.alphaSub[1]) {
                alphaSubNum++
            }

            if (password.charCodeAt(j) >= passwordUnicodeLimit.alphaSup[0] && password.charCodeAt(j) <= passwordUnicodeLimit.alphaSup[1]) {
                alphaSupNum++
            }

            if (password.charCodeAt(j) >= passwordUnicodeLimit.specialCharacter[0] && password.charCodeAt(j) <= passwordUnicodeLimit.specialCharacter[1]) {
                specialNum++
            }
        }

        if (numNum && alphaSubNum && alphaSupNum && specialNum) {
            domPasswordLevel.style.color = 'green'
            domPasswordLevel.innerText = "强"
        } else if (numNum && alphaSubNum || numNum && alphaSupNum || numNum && specialNum || alphaSubNum && alphaSupNum || alphaSubNum && specialNum || alphaSupNum && specialNum){
            domPasswordLevel.style.color = 'red'
            domPasswordLevel.innerText = "弱"
        }
            }
}
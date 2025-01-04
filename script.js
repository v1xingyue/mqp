const addressList = [
    "0x01d3d86bfc8f64ef27bf8d71aae16e8d5227e63715e805825b86e8a79fc777ed",
    "0x0985a890523b6a1f1339bb761b8c12f62f56d88750481f2be6dc740a29367951",
    "0x73016bf4935d1c6305f2d91ed4860d6d42688373875321cbec2ffd9829b1d4da",       
    "0x7e709c04e3b73b47072d48b519feaddd9de0b2ac15b8223a890a9ffa7f566c1f",
    "0x93dcf3638e6b17e9919fd9d32f18753ca05344642f9b8255829d6d69f200e5b8",
    "0x1366b29b2d263f7054bce1761fb515c5bdc5b93d586e5740c9e2b29630a2d0c8",
    "0xfc989a3b14deb10c04ee0ec61dfb28bd5e6ebc88962fbeeaee633b22734619f7",
    "0x3d9c9e5d457cdb7bc01a23eac8ad57a6b9c97888e70849068b4c898a106489f5",
    "0xdccbabc9853fd83754a637b8d873e6dd8d36b9b9957b4ce3e3f49b7c65c36440",
    "0xde4691e1b61fe6589b0a10cb5b2c9a4a734bf4377107cee031578f77988c07f4",
    "0x1c29444d4a646b9938f9b8649caa31ce0baec7eb3f18086767846dbf5a4b61e9",
    "0x043409ad9c33cc19a85f7d8dc13ebb5d8e227a421f3c2a220c0d782ac3297ce0",
    "0x6c01c0c1db030ed9933eee2f1e6f7c187248e707225bf4fb8dc8719b641b32d6",
    "0xd44e34a52fd0404e495bddcf0d6b5bd0f149e7dde8b3481da2136e25767b5403",
    "0xfd49745669e7f915b6841132bb76d122c17ae3203cf886557a071ab72413968a",
    "0x25fc07c57bad16d0fe7a945d29156aae005763e8230839fe65251c5ce238a277",
    "0x24eadb747dabf1211b674859b9c4758b1efd5fdd62053122d1729fef775cca20",
    "0x004dee62aab61fab45608df1184ecae7a75a038e810ac8eb190082090a71a4d4",
    "0x0b1c46e92ede7dbde0a92f40678dbea88d68e0138ee6ed23552391de1599a668",
    "0x610012c2344e36dc7b6f1d3cbcbfb4ed008c967259a2a638455c082c54ba467d",
    "0x25cceeedd5b119111c7f8b986f7284e321d471f3d4b8adae373153ceadbb24d3",
    "0x4ddf9b903b18322a7916c3e634ac6b1f7b32b9fe0b82830cc295754f8507790e",
    "0x5fca8b9c3b38feba809287969b6610091de7ac9d12c8f7c6a0f10bb0a6b670e2",
    "0x6306991a80fe6458206154570875cfb33fd01729117b705844a6b9240ade17bf",
    "0x4ee9cddbaffe017df2c308de902849520ace6c686080e5a0bec3fb50183f4d00",
    "0xfe06cbf5892e9149c3f90237d54050353f05e9e44b91444e5b856919c106dae8",
    "0x9f6c0940974bd08a339d2e7a1a8a8d0c347182cd8416b586a67b92b3dd98a68e",
    "0xb9a670ece112473e9c341f65ba622a0e2dfd290caa6936ca671c9183f12991f5",
    "0x6b879e22c604ff62c582f423e99cbabd44e294da85aff689efc8ef06c9b8cbb5",
    "0x848666bd31aaa8b3060885502e4548998ccfe7d257cc60a507dc8cb442b7ff3d",
    "0xb7270f86fc9b0c1cbf83bc58ccbef11017c8b8cbb56845eb1ec8371df41c4a19",
    "0xc27f539ea42669bf84c21c3233dc319cc17e8891d74ae16d3dca0bffe9acb613",
    "0x27b9a70b10ebbaaf7e91f881fb3c3a570f423d6e0fbb63b1c0c751cb63ab65aa",
    "0x5b829450905de9dada6590d6822549db2a9def42675f1790cdff65318b5ff207",
    "0x32d3cdd44933093cc9e8ca29881043b2c41b6ce409426b08de495b00bf17efb1",
    "0xd94509193511ebaf2443c90657b5e700eb264edf68b1e3a8f6493c776149b2b7",
    "0xf383c2d5fd5fb84ea01279ae8c17615e41927778baac9ca06a89bc38ebd1d7c2",
    "0xfac550581587d4c15882a7482f219d5e650711a9f47a3831e102566355569a6b",
    "0xea60e2b42dc4c1cebb991f6daa4ef50dea1e72aa077347444561c14cd64d76e9",
    "0xf0d650aeb2c75ebbeb2b629fd0a2d68ecee7a5d89f29b83e7d75c8b9d6253075",
    "0x5f7699d1e278cc403c8c208dc37edaf3d10494b4cfa722ab22757c9f9e0407c6",
    "0x5e6c8a862415760dc00ef3e60dabb4712aa3e8168c4c3ad26b11387774a1e560",
    "0x9915768dd75b6df1c9c44ce636bd3b74bebe1d46272eb3c380f42789f4717bde",
    "0xd91c5ae90b017ae1594e5ba1a923c038f725aedba19ec4a90c6d78b651322560",
    "0x1b19413f909bc881e7a8eb9208ca1322a14f9e7b1b99a2258adb4f7bd48bb227",
    "0xa4cef91f2d4710ec12cf1ce0af74d000ea8779f3bc359095ad619855b04e41c6",
    "0x45c540aba8f3801a721df4186e0f32ef4a73e003ce170c6d4c9605ff36488a21",
    "0x207cbb8568f01df4a53f722c7c033a1ce225a7c53447778b54efaa0da66bd6c6",
    "0x1988268d0074754a97820fb6b6216f27fc534bfe9c15e142b024ae259bb6d0ae",
    "0xfcecbbf407125ac4bdcca6e1ae0fefd7eae852544a2d55955dd3de4c061cb34a",
    "0x0cc3042f091d6b6f3ff1c5bc7e80a1d657d5a85175a7a2c0d96ea963309879bb",
    "0xa90b3a23e638d4d7a71c8a0ad6c020801c7b965a8554781fe71437c6d93cf200"
];

// 在 addressList 数组后添加配置
const CONFIG = {
    REFRESH_INTERVAL: 60000, // 刷新间隔，默认60秒
    BATCH_SIZE: 10, // 每批处理的地址数量
    COUNTDOWN_UPDATE_INTERVAL: 1000 // 倒计时更新间隔，1秒
};

let refreshTimer = null; // 用于存储定时器ID
let countdownTimer = null; // 用于存储倒计时定时器ID
let nextRefreshTime = null; // 用于存储下次刷新时间

// 添加一个工具函数来将数组分成小块
function chunkArray(array, size) {
    const chunks = [];
    for (let i = 0; i < array.length; i += size) {
        chunks.push(array.slice(i, i + size));
    }
    return chunks;
}

async function getBalance(address) {
    try {
        const cleanAddress = address.replace('0x', '');
        const response = await fetch(`https://fullnode.mainnet.aptoslabs.com/v1/accounts/${cleanAddress}/resource/0x1::coin::CoinStore<0x1::aptos_coin::AptosCoin>`);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        if (data && data.data && data.data.coin && data.data.coin.value) {
            return Number(data.data.coin.value) / 100000000;
        }
        return 0;
    } catch (error) {
        console.error(`获取地址 ${address} 的余额时出错:`, error);
        return 0;
    }
}

async function displayBalances() {
    const tableBody = document.getElementById('tableBody');
    const loading = document.getElementById('loading');
    
    loading.style.display = 'block';
    tableBody.innerHTML = ''; // 清空现有数据
    
    const addressChunks = chunkArray(addressList, CONFIG.BATCH_SIZE);
    let maxBalance = 0;
    let maxBalanceRow = null;
    
    try {
        let currentIndex = 0; // 用于跟踪全局索引
        for (const chunk of addressChunks) {
            const balancePromises = chunk.map(async (address, index) => {
                const balance = await getBalance(address);
                return { 
                    address, 
                    balance,
                    index: currentIndex + index + 1 // 序号从1开始
                };
            });
            
            const results = await Promise.all(balancePromises);
            
            results.forEach(({ address, balance, index }) => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${index}</td>
                    <td>${address}</td>
                    <td>${balance.toFixed(8)} APT</td>
                `;
                tableBody.appendChild(row);
                
                if (balance > maxBalance) {
                    maxBalance = balance;
                    maxBalanceRow = row;
                }
            });
            
            currentIndex += chunk.length; // 更新全局索引
        }
        
        // 滚动到最大余额的位置
        if (maxBalanceRow) {
            setTimeout(() => {
                maxBalanceRow.style.backgroundColor = '#fff3cd'; // 高亮显示最大余额行
                maxBalanceRow.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'center' 
                });
            }, 100); // 短暂延迟确保DOM已完全更新
        }
    } catch (error) {
        console.error('查询余额时发生错误:', error);
    } finally {
        loading.style.display = 'none';
        updateLastRefreshTime();
    }
}

// 添加更新最后刷新时间的函数
function updateLastRefreshTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    document.getElementById('lastRefresh').textContent = `最后更新: ${timeString}`;
}

// 添加更新倒计时的函数
function updateCountdown() {
    if (!nextRefreshTime) return;
    
    const now = new Date().getTime();
    const timeLeft = Math.max(0, nextRefreshTime - now);
    const secondsLeft = Math.ceil(timeLeft / 1000);
    
    const countdownElement = document.getElementById('countdown');
    countdownElement.textContent = `下次刷新: ${secondsLeft} 秒`;
    
    if (timeLeft <= 0 && countdownTimer) {
        clearInterval(countdownTimer);
        countdownTimer = null;
    }
}

// 修改 startAutoRefresh 函数
function startAutoRefresh() {
    // 清除可能存在的旧定时器
    if (refreshTimer) {
        clearInterval(refreshTimer);
    }
    if (countdownTimer) {
        clearInterval(countdownTimer);
    }
    
    // 设置新的定时器
    refreshTimer = setInterval(() => {
        displayBalances();
        // 更新下次刷新时间
        nextRefreshTime = new Date().getTime() + CONFIG.REFRESH_INTERVAL;
    }, CONFIG.REFRESH_INTERVAL);
    
    // 立即设置下次刷新时间
    nextRefreshTime = new Date().getTime() + CONFIG.REFRESH_INTERVAL;
    
    // 启动倒计时更新
    countdownTimer = setInterval(updateCountdown, CONFIG.COUNTDOWN_UPDATE_INTERVAL);
    
    // 更新按钮状态
    document.getElementById('refreshToggle').textContent = '停止自动刷新';
}

// 修改 stopAutoRefresh 函数
function stopAutoRefresh() {
    if (refreshTimer) {
        clearInterval(refreshTimer);
        refreshTimer = null;
    }
    if (countdownTimer) {
        clearInterval(countdownTimer);
        countdownTimer = null;
    }
    
    nextRefreshTime = null;
    document.getElementById('countdown').textContent = '自动刷新已停止';
    document.getElementById('refreshToggle').textContent = '开始自动刷新';
}

// 修改 manualRefresh 函数
function manualRefresh() {
    displayBalances();
    if (refreshTimer) {
        // 重置倒计时
        nextRefreshTime = new Date().getTime() + CONFIG.REFRESH_INTERVAL;
    }
}

// 添加切换自动刷新的函数
function toggleAutoRefresh() {
    if (refreshTimer) {
        stopAutoRefresh();
    } else {
        startAutoRefresh();
    }
}

// 页面加载完成后的初始化
window.addEventListener('load', () => {
    displayBalances(); // 首次加载数据
    startAutoRefresh(); // 开始自动刷新
});

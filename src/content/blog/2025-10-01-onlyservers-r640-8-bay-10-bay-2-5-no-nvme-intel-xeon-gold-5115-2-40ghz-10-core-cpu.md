---
title: Onlyservers R640 8-Bay/10-Bay 2.5" - No NVME Intel Xeon Gold 5115 2.40GHz
  10-Core CPU
categories: 服务器
tags: []
id: post-1759339552487-490eko
date: 2025-10-02 01:20:00
cover: https://picup.ikuyo.de/i/2025/10/02/1759339331965.png
---


| 配置项              | 规格说明                                                                 |
|---------------------|--------------------------------------------------------------------------|
| **System Variant**  | R640 8-Bay/10-Bay 2.5" - No NVME                                         |
| **Processor**       | Intel Xeon Gold 5115 2.40GHz 10-Core CPU                                |
| **Memory**          | 384GB DDR4 Memory                                                        |
| **2.5 inch Drives** | 2 × 1.92TB SAS SSD 2.5" 12Gbps Read Intensive                           |
| **Raid Controller** | H730p 2GB Mini Mono Raid Controller                                     |
| **Port Speed**      | 10 GBit/s Network Port                                                   |
| **Inclusive Traffic** | Guaranteed Unmetered - No Fair Usage Policy                            |
| **Operating System** | Ubuntu 24.04 LTS                                                        |
| **IP Address Allocation** | Single IP Only (/31 Subnet)                                        |
| **Payment Term**    | Monthly                                                                 |




## 融合怪测试
```
--------------------- A Bench Script By spiritlhl ----------------------
                   测评频道: https://t.me/+UHVoo2U4VyA5NTQ1                    
VPS融合怪版本：2025.08.31
Shell项目地址：https://github.com/spiritLHLS/ecs
Go项目地址 [推荐]：https://github.com/oneclickvirt/ecs
---------------------基础信息查询--感谢所有开源项目---------------------
 CPU 型号          : Intel(R) Xeon(R) Gold 5115 CPU @ 2.40GHz
 CPU 核心数        : 1 物理核心, 10 总核心, 20 总线程数
 CPU 频率          : 1531.660 MHz
 CPU 缓存          : L1: 320.00 KB / L2: 10.00 MB / L3: 13.75 MB
 AES-NI指令集      : ✔ Enabled
 VM-x/AMD-V支持    : ✔ Enabled
 内存              : 112.06 GiB / 376.36 GiB
 Swap              : [ no swap partition or swap file detected ]
 硬盘空间          : 296.27 GiB / 3.44 TiB
 启动盘路径        : /dev/sda2
 系统在线时间      : 22 days, 0 hour 58 min
 负载              : 1.94, 1.90, 2.54
 系统              : Debian GNU/Linux 12 (bookworm) (x86_64)
 架构              : x86_64 (64 Bit)
 内核              : 6.7.9-bbrplus
 TCP加速方式       : bbr
 虚拟化架构        : Dedicated
 NAT类型           : Full Cone
 IPV4 ASN          : AS204044 PACKET STAR NETWORKS LIMITED
 IPV4 位置         : London / England / GB
 IPV6 ASN          : AS249 PACKETSTAR European Network
 IPV6 位置         : United Kingdom
 IPV6 子网掩码     : 128
----------------------CPU测试--通过sysbench测试-------------------------
 -> CPU 测试中 (Fast Mode, 1-Pass @ 5sec)
 1 线程测试(单核)得分:          921 Scores
 20 线程测试(多核)得分:                 14502 Scores
---------------------内存测试--感谢lemonbench开源-----------------------
 -> 内存测试 Test (Fast Mode, 1-Pass @ 5sec)
 单线程读测试:          18931.20 MB/s
 单线程写测试:          15558.94 MB/s
------------------磁盘dd读写测试--感谢lemonbench开源--------------------
 -> 磁盘IO测试中 (4K Block/1M Block, Direct Mode)
 测试操作               写速度                                  读速度
 100MB-4K Block         113 MB/s (27.50 IOPS, 0.93s))           142 MB/s (34554 IOPS, 0.74s)
 1GB-1M Block           2.2 GB/s (2121 IOPS, 0.47s)             2.3 GB/s (2208 IOPS, 0.45s)
---------------------磁盘fio读写测试--感谢yabs开源----------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------   | ---            ----  | ----           ---- 
Read       | 117.62 MB/s  (29.4k) | 1.86 GB/s    (29.0k)
Write      | 117.93 MB/s  (29.4k) | 1.87 GB/s    (29.2k)
Total      | 235.55 MB/s  (58.8k) | 3.73 GB/s    (58.3k)
           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------   | ---            ----  | ----           ---- 
Read       | 2.32 GB/s     (4.5k) | 2.39 GB/s     (2.3k)
Write      | 2.44 GB/s     (4.7k) | 2.55 GB/s     (2.4k)
Total      | 4.76 GB/s     (9.3k) | 4.95 GB/s     (4.8k)
------------流媒体解锁--基于oneclickvirt/CommonMediaTests开源-----------
以下测试的解锁地区是准确的，但是不是完整解锁的判断可能有误，这方面仅作参考使用
----------------Netflix-----------------
[IPV4]
您的出口IP完整解锁Netflix，支持非自制剧的观看
NF所识别的IP地域信息：英国
[IPV6]
您的出口IP完整解锁Netflix，支持非自制剧的观看
NF所识别的IP地域信息：英国
----------------Youtube-----------------
[IPV4]
连接方式: Youtube Video Server
视频缓存节点地域: LHR(LHR25S41)
[IPV6]
连接方式: Youtube Video Server
视频缓存节点地域: IAD(IAD23S03)
---------------DisneyPlus---------------
[IPV4]
当前IPv4出口所在地区即将开通DisneyPlus
[IPV6]
当前IPv4出口所在地区即将开通DisneyPlus
解锁Netflix，Youtube，DisneyPlus上面和下面进行比较，不同之处自行判断
----------------流媒体解锁--感谢RegionRestrictionCheck开源--------------
 以下为IPV4网络测试，若无IPV4网络则无输出
============[ Multination ]============
 Dazn:                                  Yes (Region: GB)
 Disney+:                               Yes (Region: GB)
 Netflix:                               Yes (Region: )
 YouTube Premium:                       Yes (Region: GB)
 Amazon Prime Video:                    Yes (Region: GB)
 TVBAnywhere+:                          Yes
 Spotify Registration:                  No
 OneTrust Region:                       GB [England]
 iQyi Oversea Region:                   GB
 Bing Region:                           GB (Risky)
 Apple Region:                          GB
 YouTube CDN:                           London
 Netflix Preferred CDN:                 [RETN] in [Budapest]
 ChatGPT:                               Yes
 Google Gemini:                         No
 Claude:                                Yes
 Wikipedia Editability:                 Yes
 Google Play Store:                     United Kingdom 
 Google Search CAPTCHA Free:            No
 Steam Currency:                        GBP
 ---Forum---
 Reddit:                                Yes
 ---Game---
 SD Gundam G Generation Eternal:        Yes
=======================================
 以下为IPV6网络测试，若无IPV6网络则无输出
============[ Multination ]============
 Dazn:                                  IPv6 Is Not Currently Supported
 Disney+:                               IPv6 Is Not Currently Supported
 Netflix:                               Yes (Region: )
 YouTube Premium:                       No
 Amazon Prime Video:                    IPv6 Is Not Currently Supported
 TVBAnywhere+:                          IPv6 Is Not Currently Supported
 Spotify Registration:                  No
 OneTrust Region:                       GB [England]
 iQyi Oversea Region:                   IPv6 Is Not Currently Supported
 Bing Region:                           GB (Risky)
 Apple Region:                          GB
 YouTube CDN:                           Washington DC
 Netflix Preferred CDN:                 London
 ChatGPT:                               Failed (Network Connection)
 Google Gemini:                         No
 Claude:                                Yes
 Wikipedia Editability:                 Yes
 Google Play Store:                     Unknown Region 
 Google Search CAPTCHA Free:            Yes
 Steam Currency:                        IPv6 Is Not Currently Supported
 ---Forum---
 Reddit:                                IPv6 Is Not Currently Supported
 ---Game---
 SD Gundam G Generation Eternal:        Failed (Network Connection)
=======================================
--------------------TikTok解锁--感谢lmc999的源脚本----------------------
 Tiktok Region:         Failed
-------------IP质量检测--基于oneclickvirt/securityCheck使用-------------
数据仅作参考，不代表100%准确，如果和实际情况不一致请手动查询多个数据库比对
以下为各数据库编号，输出结果后将自带数据库来源对应的编号
ipinfo数据库  [0] | scamalytics数据库 [1] | virustotal数据库   [2] | abuseipdb数据库   [3] | ip2location数据库    [4]
ip-api数据库  [5] | ipwhois数据库     [6] | ipregistry数据库   [7] | ipdata数据库      [8] | db-ip数据库          [9]
ipapiis数据库 [A] | ipapicom数据库    [B] | bigdatacloud数据库 [C] | dkly数据库        [D] | ipqualityscore数据库 [E]
IPV4:
安全得分:
声誉(越高越好): 0 [2] 
信任得分(越高越好): 64 [8] 
VPN得分(越低越好): 30 [8]
代理得分(越低越好): 21 [8] 
社区投票-无害: 0 [2] 
社区投票-恶意: 0 [2] 
威胁得分(越低越好): 57 [8] 
欺诈得分(越低越好): 65 [E] 
滥用得分(越低越好): 0 [3] 
ASN滥用得分(越低越好): 0.0023 (Low) [A] 
公司滥用得分(越低越好): 0 (Very Low) [A] 
威胁级别: low [9] 
黑名单记录统计:(有多少黑名单网站有记录):
无害记录数: 0 [2]  恶意记录数: 0 [2]  可疑记录数: 0 [2]  无记录数: 95 [2]  
安全信息:
使用类型: unknown [C] DataCenter/WebHosting/Transit [3] business [8] hosting [0 7 9 A]
公司类型: hosting [0 A] isp [7]
是否云提供商: Yes [7] 
是否数据中心: Yes [0 A] No [5 6 8 C]
是否移动设备: Yes [E] No [5 A C]
是否代理: No [0 4 5 6 7 8 9 A C] Yes [E]
是否VPN: Yes [E] No [0 6 7 A C]
是否Tor: No [0 3 6 7 8 A C E] 
是否Tor出口: No [7] 
是否网络爬虫: No [9 A E] 
是否匿名: No [6 7 8] 
是否攻击者: No [7 8]
是否滥用者: No [7 8 A C E] 
是否威胁: No [7 8 C] 
是否中继: No [0 7 8 C] 
是否Bogon: No [7 8 A C] 
是否机器人: No [E] 
DNS-黑名单: 315(Total_Check) 0(Clean) 6(Blacklisted) 16(Other) 
IPV6:
安全得分:
滥用得分(越低越好): 0 [3]
ASN滥用得分(越低越好): 0 (Very Low) [A] 
公司滥用得分(越低越好): 0 (Very Low) [A] 
安全信息:
使用类型: business [A] FixedLineISP [3]
公司类型: hosting [A] 
是否数据中心: Yes [A] 
是否移动设备: No [A] 
是否代理: No [A] 
是否VPN: No [A] 
是否Tor: No [3 A] 
是否网络爬虫: No [A]
是否滥用者: No [A] 
是否Bogon: No [A] 
DNS-黑名单: 315(Total_Check) 0(Clean) 0(Blacklisted) 315(Other) 
Google搜索可行性：NO
-------------邮件端口检测--基于oneclickvirt/portchecker开源-------------
Platform  SMTP  SMTPS POP3  POP3S IMAP  IMAPS
LocalPort ✔     ✔     ✔     ✔     ✔     ✔    
QQ        ✔     ✔     ✔     ✘     ✔     ✘    
163       ✔     ✔     ✔     ✘     ✔     ✘    
Sohu      ✔     ✔     ✔     ✘     ✔     ✘    
Yandex    ✔     ✔     ✔     ✘     ✔     ✘    
Gmail     ✔     ✔     ✘     ✘     ✘     ✘    
Outlook   ✔     ✘     ✔     ✘     ✔     ✘    
Office365 ✔     ✘     ✔     ✘     ✔     ✘    
Yahoo     ✔     ✔     ✘     ✘     ✘     ✘    
MailCOM   ✔     ✔     ✔     ✘     ✔     ✘    
MailRU    ✔     ✔     ✘     ✘     ✔     ✘    
AOL       ✔     ✔     ✘     ✘     ✘     ✘    
GMX       ✔     ✔     ✔     ✘     ✔     ✘    
Sina      ✔     ✔     ✔     ✘     ✔     ✘    
Apple     ✘     ✘     ✘     ✘     ✘     ✘    
FastMail  ✘     ✔     ✘     ✘     ✘     ✘    
ProtonMail✘     ✘     ✘     ✘     ✘     ✘    
MXRoute   ✔     ✘     ✔     ✘     ✔     ✘    
Namecrane ✔     ✔     ✔     ✘     ✔     ✘    
XYAMail   ✘     ✘     ✘     ✘     ✘     ✘    
ZohoMail  ✘     ✔     ✘     ✘     ✘     ✘    
Inbox_eu  ✔     ✔     ✔     ✘     ✘     ✘    
Free_fr   ✘     ✔     ✔     ✘     ✔     ✘    
-------------上游及三网回程--基于oneclickvirt/backtrace开源-------------
国家: GB 城市: London 服务商: AS204044 PACKET STAR NETWORKS LIMITED
      AS249       
Packet Star Networ
      Direct      
北京电信v4 219.141.140.10           电信163    [普通线路] 
北京联通v4 202.106.195.68           联通4837   [普通线路] 
北京移动v4 221.179.155.161          移动CMI    [普通线路] 移动CMIN2  [精品线路] 
上海电信v4 202.96.209.133           电信163    [普通线路] 
上海联通v4 210.22.97.1              联通4837   [普通线路] 
上海移动v4 211.136.112.200          移动CMI    [普通线路] 移动CMIN2  [精品线路] 
广州电信v4 58.60.188.222            电信163    [普通线路] 
广州联通v4 210.21.196.6             联通4837   [普通线路] 
广州移动v4 120.196.165.24           移动CMI    [普通线路] 
成都电信v4 61.139.2.69     检测不到回程路由节点的IPV4地址
成都联通v4 119.6.6.6                联通4837   [普通线路] 
成都移动v4 211.137.96.205           移动CMI    [普通线路] 
北京电信v6 2400:89c0:1053:3::69     电信163    [普通线路] 
北京联通v6 2400:89c0:1013:3::54     联通4837   [普通线路] 
北京移动v6 2409:8c00:8421:1303::55  移动CMIN2  [精品线路] 移动CMI    [普通线路] 
上海电信v6 240e:e1:aa00:4000::24    检测不到回程路由节点的IPV6地址
上海联通v6 2408:80f1:21:5003::a     联通4837   [普通线路] 
上海移动v6 2409:8c1e:75b0:3003::26  移动CMIN2  [精品线路] 移动CMI    [普通线路] 
广州电信v6 240e:97c:2f:3000::44     电信163    [普通线路] 
广州联通v6 2408:8756:f50:1001::c    联通4837   [普通线路] 
广州移动v6 2409:8c54:871:1001::12   移动CMIN2  [精品线路] 移动CMI    [普通线路] 
准确线路自行查看详细路由，本测试结果仅作参考
同一目标地址多个线路时，检测可能已越过汇聚层，除第一个线路外，后续信息可能无效
-----------------------回程路由--基于nexttrace开源----------------------
依次测试电信/联通/移动经过的地区及线路，核心程序来自nexttrace，请知悉!
广州电信 58.60.188.222
0.21 ms         AS204044 英国 英格兰 伦敦 Hosted range
0.41 ms         AS249 英国 英格兰 伦敦 as249.net
1.67 ms         AS249 英国 英格兰 伦敦 as249.net
1.75 ms         AS2914 英国 英格兰 伦敦 gin.ntt.net
1.66 ms         AS2914 [NTT-BACKBONE] 英国 英格兰 伦敦 gin.ntt.net
7.27 ms         AS2914 [NTT-BACKBONE] 法国 法兰西岛大区 巴黎 gin.ntt.net
7.16 ms         AS2914 [NTT-BACKBONE] 法国 法兰西岛大区 巴黎 gin.ntt.net
8.62 ms         AS4134 法国 www.chinatelecom.com.cn
242.38 ms       AS4134 [CHINANET-BB] 中国 广东 广州 www.chinatelecom.com.cn 电信
* ms    AS4134 [CHINANET-BB] 中国 广东 广州 www.chinatelecom.com.cn 电信
广州联通 210.21.196.6
0.23 ms         AS204044 英国 英格兰 伦敦 Hosted range
0.28 ms         AS249 英国 英格兰 伦敦 as249.net
1.12 ms         AS249 英国 英格兰 伦敦 as249.net
1.18 ms         AS1299 [ARELION-NET] 英国 英格兰 伦敦 arelion.com
1.93 ms         AS1299 [ARELION-NET] 英国 英格兰 伦敦 arelion.com
8.57 ms         AS1299 [ARELION-NET] 法国 法兰西岛大区 巴黎 arelion.com
16.91 ms        AS1299 [ARELION-NET] 德国 黑森州 美因河畔法兰克福 arelion.com
16.91 ms        AS1299 [ARELION-NET] 德国 黑森州 美因河畔法兰克福 arelion.com
16.84 ms        AS4837 [CU169-BACKBONE] 德国 黑森 美因河畔法兰克福 chinaunicom.cn 联通
182.14 ms       AS4837 [CU169-BACKBONE] 中国 广东 广州 chinaunicom.cn 联通
180.75 ms       AS4837 [CU169-BACKBONE] 中国 广东 广州 X-I chinaunicom.cn 联通
215.60 ms       AS4837 [CU169-BACKBONE] 中国 广东 广州 chinaunicom.cn 联通
171.86 ms       AS17623 [APNIC-AP] 中国 广东 深圳 chinaunicom.cn 联通
159.99 ms       AS17623 中国 广东 深圳 宝安区 chinaunicom.cn 联通
广州移动 120.196.165.24
0.24 ms         AS204044 英国 英格兰 伦敦 PACKET STAR NETWORKS LIMITED
0.49 ms         AS249 英国 英格兰 伦敦 as249.net
0.96 ms         AS249 英国 英格兰 伦敦 as249.net
1.09 ms         AS9002 [RETN-BACKBONE] 英国 伯克郡 斯劳 retn.net
1.70 ms         AS9002 英国 英格兰 伦敦 retn.net
3.58 ms         AS58453 [LINX-PEER] 英国 英格兰 LINX LON1 - China Mobile International - 20Gbps cmi.chinamobile.com
3.32 ms         AS58453 [CMI-INT] 英国 伯克郡 斯劳 cmi.chinamobile.com 移动
197.80 ms       AS58453 [CMI-INT] 英国 英格兰 伦敦 cmi.chinamobile.com 移动
197.09 ms       AS9808 [CMNET] 中国 广东 广州 X-I chinamobileltd.com 移动
197.45 ms       AS9808 [CMNET] 中国 广东 广州 I-C chinamobileltd.com 移动
205.20 ms       AS9808 [CMNET] 中国 广东 广州 chinamobileltd.com 移动
202.03 ms       AS9808 [CMNET] 中国 广东 广州 chinamobileltd.com 移动
199.64 ms       AS56040 [APNIC-AP] 中国 广东 深圳 gd.10086.cn 移动
--------------------自动更新测速节点列表--本脚本原创--------------------
位置             上传速度        下载速度        延迟
Speedtest.net    8932.61Mbps     5172.49Mbps     1.67ms 
法兰克福         6833.89Mbps     7015.97Mbps     14.29ms        
洛杉矶           507.65Mbps      864.25Mbps      130.00ms       
联通上海5G       326.74Mbps      97.14Mbps       192.98ms       
电信Suzhou5G     382.35Mbps      789.18Mbps      222.76ms       
移动Suzhou       116.06Mbps      0.43Mbps        595.03ms       
------------------------------------------------------------------------
 总共花费      : 6 分 35 秒
 时间          : Wed Oct  1 10:03:06 PDT 2025
------------------------------------------------------------------------
  短链:
    https://paste.spiritlhl.net/#/show/HjIWX.txt
    http://hpaste.spiritlhl.net/#/show/HjIWX.txt
  每项测试基准见: https://bash.spiritlhl.net/ecsguide


```




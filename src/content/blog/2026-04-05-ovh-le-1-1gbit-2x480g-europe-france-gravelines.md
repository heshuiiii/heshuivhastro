---
title: OVH LE-1 1Gbit 2x480G  Europe (France - Gravelines)
categories: 服务器
tags: []
id: post-1775378864958-i9dxfm
date: 2026-04-05 16:47:00
cover: ""
---

这次找别人买的120元 OVH le-1 法国 格拉沃利讷机房 12.99欧一个月  配置还算可以  上下都是G口

内存较大 存储也挺大  CPU虽然性能拉跨了一些 不过我对价格配置都很满意 也是第一次接PUSH收机

作为欧洲巨头IDC厂商  OVH的特点 抗D 流量无限 sla在线 此次愚人节款特供基本都是标配 没有抽奖情况 后续我还希望有抽奖机出售 天了清明和复活节是一天（哈哈

```
测评频道: https://t.me/+UHVoo2U4VyA5NTQ1                    
VPS融合怪版本：2026.02.28
Shell项目地址：https://github.com/spiritLHLS/ecs
Go项目地址 [推荐]：https://github.com/oneclickvirt/ecs
---------------------基础信息查询--感谢所有开源项目----------------------
 CPU 型号          : Intel(R) Xeon(R) CPU E3-1245 V2 @ 3.40GHz
 CPU 核心数        : 1 物理核心, 4 总核心, 8 总线程数
 CPU 频率          : 2495.190 MHz
 CPU 缓存          : L1: 128.00 KB / L2: 1.00 MB / L3: 8.00 MB
 AES-NI指令集      : ✔ Enabled
 VM-x/AMD-V支持    : ✔ Enabled
 内存              : 285.76 MiB / 31.24 GiB
 Swap              : [ no swap partition or swap file detected ]
 硬盘空间          : 1.10 GiB / 876.93 GiB
 启动盘路径        : /dev/md1
 系统在线时间      : 0 days, 0 hour 2 min
 负载              : 0.22, 0.05, 0.02
 系统              : Debian GNU/Linux 12 (bookworm) (x86_64)
 架构              : x86_64 (64 Bit)
 内核              : 6.1.0-42-amd64
 TCP加速方式       : cubic
 虚拟化架构        : Dedicated
 NAT类型           : Full Cone
 IPV4 ASN          : AS16276 OVH SAS
 IPV4 位置         : Gravelines / Hauts-de-France / FR
 IPV6 ASN          : AS16276 OVH SAS
 IPV6 位置         : France
 IPV6 子网掩码     : 64
------------------------CPU测试--通过sysbench测试-------------------------
 -> CPU 测试中 (Fast Mode, 1-Pass @ 5sec)
 1 线程测试(单核)得分: 		1066 Scores
 8 线程测试(多核)得分: 		6739 Scores
--------------------内存测试--感谢lemonbench开源----------------------------
 -> 内存测试 Test (Fast Mode, 1-Pass @ 5sec)
 单线程读测试:		23413.77 MB/s
 单线程写测试:		19949.65 MB/s
--------------------磁盘dd读写测试--感谢lemonbench开源--------------------
 -> 磁盘IO测试中 (4K Block/1M Block, Direct Mode)
 测试操作		写速度					读速度
 100MB-4K Block		96.8 MB/s (23.62 IOPS, 1.08s)		128 MB/s (31215 IOPS, 0.82s)
 1GB-1M Block		745 MB/s (711 IOPS, 1.41s)		706 MB/s (672 IOPS, 1.49s)
----------------------磁盘fio读写测试--感谢yabs开源-----------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------   | ---            ----  | ----           ---- 
Read       | 265.95 MB/s  (66.4k) | 338.39 MB/s   (5.2k)
Write      | 266.65 MB/s  (66.6k) | 340.18 MB/s   (5.3k)
Total      | 532.61 MB/s (133.1k) | 678.57 MB/s  (10.6k)
           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------   | ---            ----  | ----           ---- 
Read       | 428.45 MB/s    (836) | 438.06 MB/s    (427)
Write      | 451.22 MB/s    (881) | 467.24 MB/s    (456)
Total      | 879.67 MB/s   (1.7k) | 905.30 MB/s    (883)
---------------流媒体解锁--感谢oneclickvirt/UnlockTests测试----------------
测试时间:  2026-04-05 16:24:56
IPV4:
============[ 跨国平台 ]============
Apple                     YES (Region: FRA) [Native]
BingSearch                YES (Region: FR)
Claude                    YES [Native]
Dazn                      Banned
Disney+                   NO (forbidden-location)
Gemini                    NO
GoogleSearch              YES
Google Play Store         YES (Region: FR) [Native]
IQiYi                     YES (Region: FR) [Native]
Instagram Licensed Audio  YES [Native]
KOCOWA                    YES [Native]
MetaAI                    YES [Native]
Netflix                   YES (Region: FR) [Native]
Netflix CDN               BE
OneTrust                  YES (Region: FR HAUTS-DE-FRANCE) [Via DNS]
ChatGPT                   YES (Region: FR) [Native]
Paramount+                YES [Native]
Amazon Prime Video        YES (Region: FR) [Native]
Reddit                    NO
SonyLiv                   YES (Region: IN) [Via DNS]
Sora                      YES (Region: FR)
Spotify Registration      NO
Steam Store               YES (Community Available) (Region: FR)
TVBAnywhere+              YES (Region: FR) [Native]
TikTok                    YES (Region: FR) [Native]
Viu.com                   YES [Native]
Wikipedia Editability     NO
YouTube Region            YES (Region: FR) [Native]
YouTube CDN               PAR
IPV6:
============[ 跨国平台 ]============
Apple                     YES (Region: FRA) [Native]
BingSearch                YES (Region: FR)
Claude                    YES [Native]
Dazn                      N/A (No IPv6 Support)
Disney+                   NO (forbidden-location)
Gemini                    NO
GoogleSearch              YES
Google Play Store         YES (Region: FR) [Native]
IQiYi                     N/A (No IPv6 Support)
Instagram Licensed Audio  YES [Native]
KOCOWA                    N/A (No IPv6 Support)
MetaAI                    YES [Native]
Netflix                   YES (Region: FR) [Native]
Netflix CDN               BE
OneTrust                  YES (Region: FR HAUTS-DE-FRANCE) [Via DNS]
ChatGPT                   Unknown
Paramount+                YES [Native]
Amazon Prime Video        N/A (No IPv6 Support)
Reddit                    Failed (Network Connection Failed)
SonyLiv                   YES (Region: IN) [Via DNS]
Sora                      YES (Region: FR)
Spotify Registration      NO
Steam Store               Failed (Network Connection Failed)
TVBAnywhere+              N/A (No IPv6 Support)
TikTok                    N/A (No IPv6 Support)
Viu.com                   N/A (No IPv6 Support)
Wikipedia Editability     NO
YouTube Region            YES (Region: FR) [Native]
YouTube CDN               PAR
---------------------TikTok解锁--感谢lmc999的源脚本---------------------
 Tiktok Region:		Failed
-------------IP质量检测--基于oneclickvirt/securityCheck使用--------------
数据仅作参考，不代表100%准确，如果和实际情况不一致请手动查询多个数据库比对
以下为各数据库编号，输出结果后将自带数据库来源对应的编号
ipinfo数据库  [0] | scamalytics数据库 [1] | virustotal数据库   [2] | abuseipdb数据库   [3] | ip2location数据库    [4]
ip-api数据库  [5] | ipwhois数据库     [6] | ipregistry数据库   [7] | ipdata数据库      [8] | db-ip数据库          [9]
ipapiis数据库 [A] | ipapicom数据库    [B] | bigdatacloud数据库 [C] | dkly数据库        [D] | ipqualityscore数据库 [E]
ipintel数据库 [F] | ipfighter数据库   [G] | fraudlogix数据库   [H] | cloudflare数据库  [I] |
IPV4:
安全得分:
信任得分(越高越好): 33 [8] 
VPN得分(越低越好): 100 [8] 
代理得分(越低越好): 0 [8] 
社区投票-无害: 0 [2] 
社区投票-恶意: 0 [2] 
威胁得分(越低越好): 100 [8] 
欺诈得分(越低越好): 65 [E]
滥用得分(越低越好): 0 [3] 
ASN滥用得分(越低越好): 0.011 (Elevated) [A]
公司滥用得分(越低越好): 0 (Very Low) [A] 
威胁级别: low [9 B] 
流量占比: 真人(越高越好)8% [I] 机器人(越低越好)91% [I]
黑名单记录统计:(有多少黑名单网站有记录):
无害记录数: 0 [2]  恶意记录数: 0 [2]  可疑记录数: 0 [2]  无记录数: 94 [2] 
安全信息:
使用类型: business [9] hosting [0 3 7 8 A C]
公司类型: hosting [0 7 A] 
浏览器类型: 主流50% 其他49% [I] 
设备类型: 桌面88% 移动11% 其他0% [I] 
操作系统类型: 主流92% 其他7% [I] 
是否云提供商: Yes [7] 
是否数据中心: Yes [0 5 8 A C G] 
是否移动设备: No [5 A C G] Yes [E]
是否代理: No [0 4 5 7 8 9 A B C] Yes [E G]
是否VPN: Yes [E G] No [0 7 A C]
是否Tor: No [0 3 7 8 A B C E] 
是否Tor出口: No [7] 
是否网络爬虫: No [9 A B E] 
是否匿名: No [7] Yes [8]
是否攻击者: No [7 8] 
是否滥用者: No [7 8 A C E] 
是否威胁: No [7 8 C] 
是否中继: No [0 7 8 C] 
是否Bogon: No [7 8 A C] 
是否机器人: No [E] 
DNS-黑名单: 304(Total_Check) 0(Clean) 0(Blacklisted) 0(Other) 
IPV6:
安全得分:
滥用得分(越低越好): 0 [3] 
ASN滥用得分(越低越好): 0.011 (Elevated) [A] 
公司滥用得分(越低越好): 0 (Very Low) [A] 
威胁级别: low [B] 
流量占比: 真人(越高越好)8% [I] 机器人(越低越好)91% [I]
安全信息:
使用类型: hosting [3 A] 
公司类型: hosting [A]
浏览器类型: 主流50% 其他49% [I] 
设备类型: 桌面88% 移动11% 其他0% [I] 
操作系统类型: 主流92% 其他7% [I] 
是否数据中心: Yes [A G] 
是否移动设备: No [A G] 
是否代理: No [A B] Yes [G]
是否VPN: No [A] Yes [G]
是否Tor: No [3 A B] 
是否网络爬虫: No [A B] 
是否滥用者: No [A] 
是否Bogon: No [A] 
DNS-黑名单: 304(Total_Check) 0(Clean) 0(Blacklisted) 304(Other) 
Google搜索可行性：NO
------------邮件端口检测--基于oneclickvirt/portchecker开源------------
Platform  SMTP  SMTPS POP3  POP3S IMAP  IMAPS
LocalPort ✔     ✔     ✔     ✔     ✔     ✔    
QQ        ✔     ✔     ✔     ✘     ✔     ✘    
163       ✔     ✔     ✔     ✘     ✔     ✘    
Sohu      ✔     ✔     ✘     ✘     ✔     ✘    
Yandex    ✔     ✔     ✔     ✘     ✔     ✘    
Gmail     ✔     ✔     ✘     ✘     ✘     ✘    
Outlook   ✔     ✘     ✔     ✘     ✔     ✘    
Office365 ✔     ✘     ✔     ✘     ✔     ✘    
Yahoo     ✔     ✔     ✘     ✘     ✘     ✘    
MailCOM   ✔     ✔     ✔     ✘     ✔     ✘    
MailRU    ✔     ✔     ✘     ✘     ✔     ✘    
AOL       ✔     ✔     ✘     ✘     ✘     ✘    
GMX       ✔     ✔     ✔     ✘     ✔     ✘    
Sina      ✔     ✘     ✔     ✘     ✔     ✘    
Apple     ✘     ✔     ✘     ✘     ✘     ✘    
FastMail  ✘     ✔     ✘     ✘     ✘     ✘    
ProtonMail✘     ✘     ✘     ✘     ✘     ✘    
MXRoute   ✔     ✘     ✔     ✘     ✔     ✘    
Namecrane ✔     ✔     ✔     ✘     ✔     ✘    
XYAMail   ✘     ✘     ✘     ✘     ✘     ✘    
ZohoMail  ✘     ✔     ✘     ✘     ✘     ✘    
Inbox_eu  ✔     ✔     ✔     ✘     ✘     ✘    
Free_fr   ✘     ✔     ✔     ✘     ✔     ✘    
-------------上游及三网回程--基于oneclickvirt/backtrace开源--------------
国家: FR 城市: Gravelines 服务商: AS16276 OVH SAS
北京电信v4 219.141.140.10  检测不到回程路由节点的IPV4地址
北京联通v4 202.106.195.68           联通4837   [普通线路] 
北京移动v4 221.179.155.161          移动CMI    [普通线路] 
上海电信v4 202.96.209.133           电信163    [普通线路] 
上海联通v4 210.22.97.1              联通4837   [普通线路] 
上海移动v4 211.136.112.200          移动CMI    [普通线路] 
广州电信v4 58.60.188.222   检测不到回程路由节点的IPV4地址
广州联通v4 210.21.196.6    检测不到回程路由节点的IPV4地址
广州移动v4 120.196.165.24           移动CMI    [普通线路] 
成都电信v4 61.139.2.69     检测不到回程路由节点的IPV4地址
成都联通v4 119.6.6.6       检测不到回程路由节点的IPV4地址
成都移动v4 211.137.96.205           移动CMI    [普通线路] 
北京电信v6 2400:89c0:1053:3::69     电信163    [普通线路] 
北京联通v6 2400:89c0:1013:3::54     检测不到回程路由节点的IPV6地址
北京移动v6 2409:8c00:8421:1303::55  检测不到回程路由节点的IPV6地址
上海电信v6 240e:e1:aa00:4000::24    电信163    [普通线路] 
上海联通v6 2408:80f1:21:5003::a     检测不到回程路由节点的IPV6地址
上海移动v6 2409:8c1e:75b0:3003::26  检测不到回程路由节点的IPV6地址
广州电信v6 240e:97c:2f:3000::44     电信163    [普通线路] 
广州联通v6 2408:8756:f50:1001::c    检测不到回程路由节点的IPV6地址
广州移动v6 2409:8c54:871:1001::12   检测不到回程路由节点的IPV6地址
准确线路自行查看详细路由，本测试结果仅作参考
同一目标地址多个线路时，检测可能已越过汇聚层，除第一个线路外，后续信息可能无效
----------------------回程路由--基于nexttrace开源-----------------------
依次测试电信/联通/移动经过的地区及线路，核心程序来自nexttrace，请知悉!
广州电信 58.60.188.222
0.40 ms 	AS16276 [OVH] 法国 上法兰西大区 格拉沃利讷 ovhcloud.com
0.47 ms 	* RFC1918
0.41 ms 	* RFC1918
1.90 ms 	* RFC1918
1.15 ms 	AS16276 法国 法兰西岛大区 巴黎 ovhcloud.com
11.12 ms 	AS16276 [FR-OVH] 德国 黑森 美因河畔法兰克福 ovhcloud.com
11.96 ms 	* RFC1918
307.65 ms 	AS4134 德国 黑森州 美因河畔法兰克福 chinatelecom.com.cn
192.15 ms 	AS4134 [CHINANET-BB] 中国 广东 广州 chinatelecom.com.cn 电信
212.23 ms 	AS4134 [APNIC-AP] 中国 广东 深圳 chinatelecom.com.cn 电信
广州联通 210.21.196.6
0.54 ms 	AS16276 [OVH] 法国 上法兰西大区 格拉沃利讷 ovhcloud.com
0.44 ms 	* RFC1918
0.33 ms 	* RFC1918
3.18 ms 	* RFC1918
1.69 ms 	AS16276 法国 法兰西岛大区 巴黎 ovhcloud.com
4.71 ms 	AS16276 [OVH] 法国 法兰西岛大区 巴黎 ovhcloud.com
4.49 ms 	* RFC1918
143.51 ms 	AS3356 美国 加利福尼亚 洛杉矶 lumen.com
441.45 ms 	AS3356 美国 加利福尼亚 洛杉矶 lumen.com
389.87 ms 	AS4837 [CU169-BACKBONE] 中国 广东 广州 chinaunicom.cn
366.27 ms 	AS4837 [CU169-BACKBONE] 中国 广东 广州 chinaunicom.cn 联通
379.11 ms 	AS17816 [APNIC-AP] 中国 广东 深圳 中国联通 联通
385.07 ms 	AS17623 [APNIC-AP] 中国 广东 深圳 chinaunicom.cn 联通
367.73 ms 	AS17623 中国 广东 深圳 宝安区 chinaunicom.cn 联通
广州移动 120.196.165.24
0.44 ms 	AS16276 [OVH] 法国 上法兰西大区 格拉沃利讷 ovhcloud.com
0.53 ms 	* RFC1918
0.41 ms 	* RFC1918
2.60 ms 	* RFC1918
0.64 ms 	AS16276 法国 法兰西岛大区 巴黎 ovhcloud.com
4.60 ms 	AS16276 [FR-OVH] 法国 法兰西岛大区 巴黎 ovhcloud.com
4.53 ms 	* RFC1918
21.70 ms 	AS58453 [CMI-INT] 中国 香港 cmi.chinamobile.com
216.87 ms 	AS58453 [CMI-INT] 德国 黑森 美因河畔法兰克福 cmi.chinamobile.com 移动
224.19 ms 	AS9808 [CMNET] 中国 广东 广州 X-I chinamobileltd.com 移动
218.62 ms 	AS9808 [CMNET] 中国 广东 广州 I-C chinamobileltd.com 移动
229.46 ms 	AS9808 [CMNET] 中国 广东 广州 chinamobileltd.com 移动
229.62 ms 	AS9808 [CMNET] 中国 广东 广州 chinamobileltd.com 移动
232.27 ms 	AS9808 [CMNET] 中国 广东 广州 chinamobileltd.com 移动
230.03 ms 	AS56040 [APNIC-AP] 中国 广东 深圳 gd.10086.cn 移动
---------------------自动更新测速节点列表--本脚本原创----------------------
位置		 上传速度	 下载速度	 延迟
Speedtest.net	 721.25Mbps	 796.28Mbps	 2.09ms	
法兰克福	 877.63Mbps	 791.06Mbps	 12.39ms	
联通上海5G	 0.90Mbps	 225.35Mbps	 310.86ms	
联通北京	 1.59Mbps	 93.46Mbps	 492.96ms	
电信Suzhou5G	 265.22Mbps	 147.47Mbps	 229.16ms	
电信Zhenjiang5G	 0.94Mbps	 122.38Mbps	 215.24ms	
------------------------------------------------------------------------
 总共花费      : 6 分 34 秒
 时间          : Sun Apr  5 16:29:53 CST 2026
------------------------------------------------------------------------
```

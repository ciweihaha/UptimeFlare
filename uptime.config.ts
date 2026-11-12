// 用户的监控配置（2026-11-12 从旧 preview 部署的页面中恢复，
// 原部署 commit 5878fff4，监控目标与旧版一致；上游默认示例已替换）
// favicon 指向 logo.svg：原 favicon.png 为二进制文件，无法经 GitHub MCP 推送

// Don't edit this line
import { MaintenanceConfig, PageConfig, WorkerConfig } from './types/config'

const pageConfig: PageConfig = {
  // Title for your status page
  title: '我的服务状态',
  favicon: '/logo.svg',
  // Links shown at the header of your status page, could set `highlight` to `true`
  links: [
    { link: 'https://movie.ciweihaha.win', label: 'MoonTV 影视' },
    { link: 'https://live.ciweihaha.win/live.m3u', label: '直播订阅' },
  ],
}

const workerConfig: WorkerConfig = {
  // Define all your monitors here
  monitors: [
    {
      // `id` should be unique, history will be kept if the `id` remains constant
      id: 'moontv',
      name: 'MoonTV 影视站',
      method: 'GET',
      target: 'https://movie.ciweihaha.win/login',
      tooltip: 'MoonTV 网页影视站',
      statusPageLink: 'https://movie.ciweihaha.win',
      expectedCodes: [200],
      timeout: 15000,
      headers: {
        'User-Agent': 'Uptimeflare',
      },
    },
    {
      id: 'iptv_live',
      name: 'IPTV 直播订阅',
      method: 'GET',
      target: 'https://live.ciweihaha.win/live.m3u',
      tooltip: 'IPTV 直播聚合订阅（m3u）',
      expectedCodes: [200],
      timeout: 30000,
      headers: {
        'User-Agent': 'Uptimeflare',
      },
      responseKeyword: '#EXTM3U',
    },
    {
      id: 'vod_api',
      name: '点播聚合接口',
      method: 'GET',
      target: 'https://live.ciweihaha.win/vod.json',
      tooltip: '影视大全点播源导入链接',
      expectedCodes: [200],
      timeout: 15000,
      headers: {
        'User-Agent': 'Uptimeflare',
      },
      responseKeyword: '"sites"',
    },
  ],
}

// You can define multiple maintenances here
// During maintenance, an alert will be shown at status page
// Also, related downtime notifications will be skipped (if any)
// Of course, you can leave it empty if you don't need this feature
const maintenances: MaintenanceConfig[] = []

// Don't edit this line
export { maintenances, pageConfig, workerConfig }

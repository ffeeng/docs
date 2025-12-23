## uniapp app端接入google统计

- [新建数据流](https://analytics.google.com/analytics/web/#/a369194099p516219612/admin/streams/table)拿到measurementId、apiSecret

```javascript
// 上报工具类
class GATracker {
  constructor(measurementId, apiSecret, isDebug = false) {
    this.measurementId = measurementId
    this.apiSecret = apiSecret
    this.isDebug = isDebug
    this.endpoint = isDebug
      ? 'https://www.google-analytics.com/debug/mp/collect'
      : 'https://www.google-analytics.com/mp/collect'
    this.clientId = this.getOrCreateClientId()

    console.log('=== GA Tracker 初始化 ===')
    console.log('Measurement ID:', this.measurementId)
    console.log('Client ID:', this.clientId)
    console.log('Debug Mode:', this.isDebug)
  }

  getOrCreateClientId() {
    let clientId = uni.getStorageSync('ga_client_id')
    if (!clientId) {
      clientId = this.generateUUID()
      uni.setStorageSync('ga_client_id', clientId)
      console.log('生成新的 Client ID:', clientId)
    }
    console.log('clientId', clientId)
    return clientId
  }

  generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      const r = Math.random() * 16 | 0
      const v = c === 'x' ? r : (r & 0x3 | 0x8)
      return v.toString(16)
    })
  }

  async sendEvent(eventName, params = {}) {
    const timestamp = new Date().toISOString()

    const payload = {
      client_id: this.clientId,
      events: [{
        name: eventName,
        params: {
          ...params,
          engagement_time_msec: 100,
          session_id: Date.now().toString(),
        },
      }],
    }

    console.log('=== 发送 GA 事件 ===')
    console.log('时间:', timestamp)
    console.log('事件名:', eventName)
    console.log('参数:', params)
    console.log('完整 Payload:', JSON.stringify(payload, null, 2))

    try {
      const response = await uni.request({
        url: `${this.endpoint}?measurement_id=${this.measurementId}&api_secret=${this.apiSecret}`,
        method: 'POST',
        data: payload,
        header: {
          'User-Agent': 'Mozilla/5.0',
          'Content-Type': 'application/json',
        },
      })

      console.log('=== GA 响应 ===')
      console.log('状态码:', response.statusCode)
      console.log('响应数据:', JSON.stringify(response.data, null, 2))

      // 调试模式下检查验证消息
      if (this.isDebug && response.data) {
        if (response.data.validationMessages && response.data.validationMessages.length > 0) {
          console.error('❌ 验证错误:')
          response.data.validationMessages.forEach((msg) => {
            console.error(msg)
          })
        }
        else {
          console.log('✅ 事件验证通过')
        }
      }

      return response
    }
    catch (error) {
      console.error('❌ GA 请求失败:', error)
      throw error
    }
  }

  screenView(screenName) {
    return this.sendEvent('screen_view', {
      screen_name: screenName,
    })
  }
}

export const ga = new GATracker(
  'G-xxx',
  'F5_sh_AMRB-xxx',
  // true, // 开启调试模式
)

```

```javascript
// 上报数据
 ga.sendEvent('page_view', { page_location: '/pages/splash/index', page_title: '欢迎页' })
```

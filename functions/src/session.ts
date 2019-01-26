import * as moment from 'moment-timezone'
moment.tz.setDefault('Asia/Tokyo')

interface Session {
  id: Number
  name: string
  place: string
  startDatetime: moment.Moment
}

export function getSession(): Session {
  // TODO: 受け取ったセッションの情報を返せるようにする
  return {
    id: 69854,
    name: 'ちゃんとつくる Google Assistant アプリ',
    place: 'Room 1',
    startDatetime: moment('2019-02-07 15:40'),
  }
}

export function getNextSessionTimeMessage(): string {
  // TODO: 時間に合わせてメッセージが変わるようにする
  return '最初のセッションは2月7日、10:00からです。'
}


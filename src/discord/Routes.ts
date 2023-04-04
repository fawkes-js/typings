import { RequestMethod } from '../fawkes/REST'

export const Routes = {
  gatewayBot () {
    return {
      requestMethod: RequestMethod.Get,
      route: '/gateway/bot',
      important: true,
      authorized: true,
      bucket: '/gateway/bot'
    }
  },
  application () {
    return {
      requestMethod: RequestMethod.Get,
      route: '/oauth2/applications/@me',
      important: false,
      authorized: true,
      bucket: '/oauth2/applications/@me'
    }
  },
  user (userId: string) {
    return {
      requestMethod: RequestMethod.Get,
      route: `/users/${userId}`,
      important: false,
      authorized: true,
      bucket: `/users/${userId}`
    }
  },
  createApplicationCommand (applicationId: string) {
    return {
      requestMethod: RequestMethod.Post,
      route: `/applications/${applicationId}/commands`,
      important: false,
      authorized: true,
      bucket: `/applications/${applicationId}/commands`
    }
  },
  createInteractionResponse (interactionId: string, interactionToken: string) {
    return {
      requestMethod: RequestMethod.Post,
      route: `/interactions/${interactionId}/${interactionToken}/callback`,
      important: false,
      authorized: true,
      bucket: `/interactions/${interactionId}/${interactionToken}/callback`
    }
  },
  getOriginalInteractionResponse (applicationId: string, interactionToken: string) {
    return {
      requestMethod: RequestMethod.Get,
      route: `/webhooks/${applicationId}/${interactionToken}/messages/@original`,
      important: false,
      authorized: true,
      bucket: `/webhooks/${applicationId}/${interactionToken}/messages/@original`
    }
  },
  addMemberRole (guildId: string, userId: string, roleId: string) {
    return {
      requestMethod: RequestMethod.Put,
      route: `/guilds/${guildId}/members/${userId}/roles/${roleId}`,
      important: false,
      authorized: true,
      bucket: `/guilds/${guildId}/members/${userId}/roles/${roleId}`
    }
  },
  removeMemberRole (guildId: string, userId: string, roleId: string) {
    return {
      requestMethod: RequestMethod.Delete,
      route: `/guilds/${guildId}/members/${userId}/roles/${roleId}`,
      important: false,
      authorized: true,
      bucket: `/guilds/${guildId}/members/${userId}/roles/${roleId}`
    }
  },
  createGuildBan (guildId: string, userId: string) {
    return {
      requestMethod: RequestMethod.Put,
      route: `/guilds/${guildId}/bans/${userId}`,
      important: false,
      authorized: true,
      bucket: `/guilds/${guildId}/bans/${userId}`
    }
  }
}

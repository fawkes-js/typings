import { RequestMethod } from '../fawkes/REST';

export const Routes = {
  gatewayBot() {
    return {
      requestMethod: RequestMethod.Get,
      endpoint: '/gateway/bot',
      important: true,
      authorized: true,
    };
  },
  application() {
    return {
      requestMethod: RequestMethod.Get,
      endpoint: '/oauth2/applications/@me',
      important: false,
      authorized: true,
    };
  },
  user(userId: string) {
    return {
      requestMethod: RequestMethod.Get,
      endpoint: `/users/${userId}`,
      important: false,
      authorized: true,
    };
  },
  createApplicationCommand(applicationId: string) {
    return {
      requestMethod: RequestMethod.Post,
      endpoint: `/applications/${applicationId}/commands`,
      important: false,
      authorized: true,
    };
  },
  createInteractionResponse(interactionId: string, interactionToken: string) {
    return {
      requestMethod: RequestMethod.Post,
      endpoint: `/interactions/${interactionId}/${interactionToken}/callback`,
      important: false,
      authorized: true,
    };
  },
  getOriginalInteractionResponse(
    applicationId: string,
    interactionToken: string
  ) {
    return {
      requestMethod: RequestMethod.Get,
      endpoint: `/webhooks/${applicationId}/${interactionToken}/messages/@original`,
      important: false,
      authorized: true,
    };
  },
  addMemberRole(guildId: string, userId: string, roleId: string) {
    return {
      requestMethod: RequestMethod.Put,
      endpoint: `/guilds/${guildId}/members/${userId}/roles/${roleId}`,
      important: false,
      authorized: true,
    };
  },
  removeMemberRole(guildId: string, userId: string, roleId: string) {
    return {
      requestMethod: RequestMethod.Delete,
      endpoint: `/guilds/${guildId}/members/${userId}/roles/${roleId}`,
      important: false,
      authorized: true,
    };
  },
  createGuildBan(guildId: string, userId: string) {
    return {
      requestMethod: RequestMethod.Put,
      endpoint: `/guilds/${guildId}/bans/${userId}`,
      important: false,
      authorized: true,
    };
  },
};

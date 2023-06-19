import { type DiscordAPIGuildVerificationLevel, type DiscordAPIFeature, type DiscordAPIInteractionType } from '../discord/REST';

export type Snowflake = string;

export interface FawkesTeam {}

export interface FawkesInstallParams {}

export interface FawkesApplication {
  id: Snowflake;
  name: string;
  icon: string | null;
  description: string;
  rpcOrigins?: string[];
  botPublic: boolean;
  botRequireCode_Grant: boolean;
  termsOfServiceUrl?: string;
  privacyPolicyUrl?: string;
  owner?: FawkesUser;
  team: FawkesTeam | null;
  guildId?: Snowflake;
  primarySkuId?: Snowflake;
  slug?: string;
  coverImage?: string;
  flags?: number;
  tags?: string[];
  install_params?: FawkesInstallParams;
  customInstallUrl?: string;
}
export interface FawkesRoleTag {
  botId?: Snowflake;
  integrationId?: Snowflake;
  premiumSubscriber?: null;
}

export interface FawkesRole {
  id: Snowflake;
  name: string;
  color: number;
  hoist: boolean;
  icon?: string | null;
  unicodeEmoji?: string | null;
  position: number;
  permissions: string;
  managed: boolean;
  mentionable: boolean;
  tags?: FawkesRoleTag;
}

export interface FawkesEmoji {
  id: Snowflake | null;
  name: string | null;
  roles: Snowflake[];
  user?: FawkesUser;
  requireColons?: boolean;
  managed?: boolean;
  animated?: boolean;
  available?: boolean;
}

export interface FawkesWelcomeScreenChannel {
  channelId: Snowflake;
  description: string;
  emojiId: Snowflake | null;
  emojiName: string | null;
}

export interface FawkesWelcomeScreen {
  description: string | null;
  welcomeChannels: FawkesWelcomeScreenChannel[];
}

export interface FawkesUser {
  id: Snowflake;
  username: string;
  discriminator: string;
  avatar: string | null;
  bot?: boolean;
  system?: boolean;
  mfaEnabled?: boolean;
  banmner?: string | null;
  accent_color?: string | null;
  locale?: string;
  verified?: boolean;
  email?: string | null;
  flags?: number;
  premiumType?: number;
  publicFlags?: number;
}

export interface FawkesSticker {
  id: Snowflake;
  pack_id?: Snowflake;
  name: string;
  description: string | null;
  tags: string;
  asset?: string;
  type: number;
  format_type: number;
  available?: boolean;
  guildId?: Snowflake;
  user?: FawkesUser;
  sortValue?: number;
}

export interface FawkesVoiceState {
  guildId?: Snowflake;
  channelId: Snowflake | null;
  userId: Snowflake;
  member?: FawkesGuildMember;
  sessionId: string;
  deaf: boolean;
  mute: boolean;
  selfDeaf: boolean;
  selfMute: boolean;
  selfStream?: boolean;
  selfVideo: boolean;
  suppress: boolean;
  requestToSpeakTimestamp: Date | null;
}

export interface FawkesGuildMember {
  user?: FawkesUser;
  nick?: string | null;
  avatar?: string | null;
  roles: Snowflake[];
  joined_at: Date;
  premiumSince?: Date | null;
  deaf: boolean;
  mute: boolean;
  pending?: boolean;
  permissions?: string;
  communicationDisabledUntil?: Date;
}

export interface FawkesThreadMetadata {}

export interface FawkesThreadMember {}

export interface FawkesDefaultReaction {}

export interface FawkesChannel {
  id: Snowflake;
  type: number;
  guildId: Snowflake;
  position?: number;
  permissionOverwrites?: FawkesOverwrite[];
  name?: string | null;
  topic?: string | null;
  nsfw?: boolean;
  lastMessageId?: Snowflake | null;
  bitrate?: number;
  userLimit?: number;
  rateLimitPerUser?: number;
  recipients?: FawkesUser[];
  icon?: string | null;
  ownerId?: Snowflake;
  applicationId?: Snowflake;
  parentId?: Snowflake | null;
  lastPinTimestamp?: Date | null;
  rtcRegion?: string | null;
  videoQualityMode?: number;
  messageCount?: number;
  memberCount?: number;
  threadMetadata?: FawkesThreadMetadata;
  member?: FawkesThreadMember;
  defaultAutoArchiveDuration?: number;
  permissions?: string;
  flags?: number;
  totalMessagesSent?: number;
  availableTags?: Snowflake[];
  defaultReactionEmoji: FawkesDefaultReaction | null;
  version: number;
}

export interface FawkesOverwrite {}

export interface FawkesPresenceUpdate {}

export interface FawkesStageInstance {}

export interface FawkesGuildScheduledEvent {}

export enum FawkesLocale {}

export interface FawkesGuild {
  id: Snowflake;
  name: string;
  icon: string | null;
  iconHash?: string | null;
  splash: string | null;
  discoverySplash: string | null;
  owner?: boolean;
  ownerId: Snowflake;
  permissions?: string;
  region?: string | null;
  afkChannelId: Snowflake | null;
  afkTimeout: number;
  widgetEnabled?: boolean;
  widgetChannelId?: Snowflake | null;
  verificationLevel: DiscordAPIGuildVerificationLevel;
  defaultMessageNotifications: number;
  explicitContentFilter: number;
  roles: FawkesRole[];
  emojis: FawkesEmoji[];
  features: DiscordAPIFeature[];
  mfaLevel: number;
  applicationId: Snowflake | null;
  systemChannelId: Snowflake | null;
  systemChannelFlags: number;
  rulesChannelId: Snowflake | null;
  maxPresences?: number | null;
  maxMembers?: number;
  vanityUrlCode: string | null;
  description: string | null;
  banner: string | null;
  premiumTier: number;
  premiumSubscriptionCount?: number;
  preferredLocale: string;
  publicUpdatesChannelId: Snowflake | null;
  maxVideoChannelUsers?: number;
  approximateMemberCount?: number;
  approximatePresenceCount?: number;
  welcomeScreen?: FawkesWelcomeScreen;
  nsfwLevel: number;
  stickers?: FawkesSticker[];
  premiumProgressBarEnabled: boolean;
  joinedAt: Date;
  large: boolean;
  unavailable?: boolean;
  memberCount: number;
  voiceStates: FawkesVoiceState[];
  members: FawkesGuildMember[];
  channels: FawkesChannel[];
  presences: FawkesPresenceUpdate[];
  stageInstances: FawkesStageInstance[];
  guildScheduledEvents: FawkesGuildScheduledEvent[];
}

export interface FawkesResolvedData {}

export interface FawkesApplicationCommandInteractionDataOption {
  name: string;
  type: number;
  value?: string | number;
  options?: FawkesApplicationCommandInteractionDataOption[];
  focused?: boolean;
}

export interface FawkesInteractionData {
  id: Snowflake;
  name: string;
  type: number;
  resolved?: FawkesResolvedData;
  options?: FawkesApplicationCommandInteractionDataOption[];
  guildId?: Snowflake;
  targetId?: Snowflake;
}

export interface FawkesChannelMention {}

export interface FawkesAttachment {}

export interface FawkesEmbed {}

export interface FawkesReaction {}

export interface FawkesMessageActivity {}

export interface FawkesPartialApplication {}

export interface FawkesMessageReference {}

export interface FawkesMessageInteraction {}

export interface FawkesMessageComponent {}

export interface FawkesMessageStickerItem {}

export interface FawkesMessage {
  id: Snowflake;
  channelId: Snowflake;
  author: FawkesUser;
  content: string;
  timestamp: Date;
  editedTimestamp: Date;
  tts: boolean;
  mentionEveryone: boolean;
  mentions: FawkesUser[];
  mentionRoles: FawkesRole[];
  mentionChannels: FawkesChannelMention;
  attachments: FawkesAttachment[];
  embeds: FawkesEmbed[];
  reactions: FawkesReaction[];
  nonce?: number | string;
  pinned: boolean;
  webhookId?: Snowflake;
  type: number;
  activity?: FawkesMessageActivity;
  application?: FawkesPartialApplication;
  applicationId?: Snowflake;
  messageReference?: FawkesMessageReference;
  flags?: number;
  referencedMessage?: FawkesMessage | null;
  interaction?: FawkesMessageInteraction;
  thread?: FawkesChannel;
  components?: FawkesMessageComponent[];
  stickerItems?: FawkesMessageStickerItem[];
  stickers?: FawkesSticker[];
  position?: number;
}

export interface FawkesInteraction {
  id: Snowflake;
  applicationId: Snowflake;
  type: DiscordAPIInteractionType;
  data?: FawkesInteractionData;
  guildId?: Snowflake;
  channelId?: Snowflake;
  member?: FawkesGuildMember;
  user?: FawkesUser;
  token: string;
  version: number;
  message?: FawkesMessage;
  appPermissions?: string;
  locale?: FawkesLocale;
  guildLocale?: string;
}

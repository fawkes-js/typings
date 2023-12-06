export enum GatewayOpcodes {
  Dispatch = 0,
  Heartbeat = 1,
  Identify = 2,
  PresenceUpdate = 3,
  VoiceStateUpdate = 4,
  Resume = 6,
  Reconnnect = 7,
  RequestGuildMembers = 8,
  InvalidSession = 9,
  Hello = 10,
  HeartbeatACK = 11,
}

export enum GatewayCloseEventCodes {
  UnknownError = 4000,
  UnknownOpcode = 4001,
  DecodeError = 4002,
  NotAuthenticated = 4003,
  AuthenticationFailed = 4004,
  AlreadyAuthenticated = 4005,
  InvalidSequence = 4007,
  RateLimited = 4008,
  SessionTimedOut = 4009,
  InvalidShard = 4010,
  ShardingRequired = 4011,
  InvalidAPIVersion = 4012,
  InvalidIntents = 4013,
  DisallowedIntents = 4014,
}

export enum GatewayIntents {
  Guilds = 1 << 0,
  GuildMembers = 1 << 1,
  GuildBans = 1 << 2,
  GuildEMojisAndStickers = 1 << 3,
  GuildIntegrations = 1 << 4,
  GuildWebhooks = 1 << 5,
  GuildInvites = 1 << 6,
  GuildVoiceStates = 1 << 7,
  GuildPresences = 1 << 8,
  GuildMessages = 1 << 9,
  GuildMessageReactions = 1 << 10,
  GuildMessageTyping = 1 << 11,
  DirectMessages = 1 << 12,
  DirectMessageReactions = 1 << 13,
  DirectMessageTyping = 1 << 14,
  MessageContent = 1 << 15,
  GuildScheduledEvents = 1 << 16,
  AutoModerationConfiguration = 1 << 20,
  AutoModerationExecution = 1 << 21,
}

export enum ReadyState {
  Connecting = 0,
  Open = 1,
  Closing = 2,
  Closed = 3,
}

export type Snowflake = string;

export interface DiscordAPITeam {}

export interface DiscordAPIInstallParams {}

export interface DiscordAPIApplication {
  id: Snowflake;
  name: string;
  icon: string | null;
  description: string;
  rpc_origins?: string[];
  bot_public: boolean;
  bot_require_code_grant: boolean;
  terms_of_service_url?: string;
  privacy_policy_url?: string;
  owner?: DiscordAPIUser;
  team: DiscordAPITeam | null;
  guild_id?: Snowflake;
  primary_sku_id?: Snowflake;
  slug?: string;
  cover_image?: string;
  flags?: number;
  tags?: string[];
  install_params?: DiscordAPIInstallParams;
  custom_install_url?: string;
}
export interface DiscordAPIRoleTags {
  bot_id?: Snowflake;
  integration_id?: Snowflake;
  premium_subscriber?: null;
  subscription_listing_id?: Snowflake;
  available_for_purchase?: null;
  guild_connections?: null;
}

export interface DiscordAPIRole {
  id: Snowflake;
  name: string;
  color: number;
  hoist: boolean;
  icon?: string | null;
  unicode_emoji?: string | null;
  position: number;
  permissions: string;
  managed: boolean;
  mentionable: boolean;
  tags?: DiscordAPIRoleTags;
}

export interface DiscordAPIEmoji {
  id: Snowflake | null;
  name: string | null;
  roles: Snowflake[];
  user?: DiscordAPIUser;
  require_colons?: boolean;
  managed?: boolean;
  animated?: boolean;
  available?: boolean;
}

export enum DiscordAPIFeature {
  AnimatedBanner = 'ANIMATED_BANNER',
  AnimatedIcon = 'ANIMATED_ICON',
  AutoModeration = 'AUTO_MODERATION',
  Banner = 'BANNER',
  Community = 'COMMUNITY',
  Discoverable = 'DISCOVERABLE',
  Featurable = 'FEATURABLE',
  InviteSplash = 'INVITE_SPLASH',
  MemberVerificationGateEnabled = 'MEMBER_VERIFICATION_GATE_ENABLED',
  MonetizationEnabled = 'MONETIZATION_ENABLED',
  MoreStickers = 'MORE_STICKERS',
  News = 'NEWS',
  Partnered = 'PARTNERED',
  PreviewEnabled = 'PREVIEW_ENABLED',
  PrivateThreads = 'PRIVATE_THREADS',
  RoleIcons = 'ROLE_ICONS',
  TicketedEventsEnabled = 'TICKETED_EVENTS_ENABLED',
  VanityURL = 'VANITY_URL',
  Verified = 'VERIFIED',
  VIPRegions = 'VIP_REGIONS',
  WelcomeScreenEnabled = 'WELCOME_SCREEN_ENABLED',
}

export interface DiscordAPIWelcomeScreenChannel {
  channel_id: Snowflake;
  description: string;
  emoji_id: Snowflake | null;
  emoji_name: string | null;
}

export interface DiscordAPIWelcomeScreen {
  description: string | null;
  welcome_channels: DiscordAPIWelcomeScreenChannel[];
}

export interface DiscordAPIUser {
  id: Snowflake;
  username: string;
  discriminator: string;
  avatar: string | null;
  bot?: boolean;
  system?: boolean;
  mfa_enabled?: boolean;
  banner?: string | null;
  accent_color?: string | null;
  locale?: string;
  verified?: boolean;
  email?: string | null;
  flags?: number;
  premium_type?: number;
  public_flags?: number;
}

export interface DiscordAPISticker {
  id: Snowflake;
  pack_id?: Snowflake;
  name: string;
  description: string | null;
  tags: string;
  asset?: string;
  type: number;
  format_type: number;
  available?: boolean;
  guild_id?: Snowflake;
  user?: DiscordAPIUser;
  sort_value?: number;
}

export interface DiscordAPIVoiceState {
  guild_id?: Snowflake;
  channel_id: Snowflake | null;
  user_id: Snowflake;
  member?: DiscordAPIGuildMember;
  session_id: string;
  deaf: boolean;
  mute: boolean;
  self_deaf: boolean;
  self_mute: boolean;
  self_stream?: boolean;
  self_video: boolean;
  suppress: boolean;
  request_to_speak_timestamp: Date | null;
}

export interface DiscordAPIGuildMember {
  user?: DiscordAPIUser;
  nick?: string | null;
  avatar?: string | null;
  roles: Snowflake[];
  joined_at: Date;
  premium_since?: Date | null;
  deaf: boolean;
  mute: boolean;
  pending?: boolean;
  permissions?: string;
  communication_disabled_until?: Date;
}

export interface DiscordAPIThreadMetadata {}

export interface DiscordAPIThreadMember {}

export interface DiscordAPIDefaultReaction {}

export interface DiscordAPIChannel {
  id: Snowflake;
  type: number;
  guild_id: Snowflake;
  position?: number;
  permission_overwrites?: DiscordAPIOverwrite[];
  name?: string | null;
  topic?: string | null;
  nsfw?: boolean;
  last_message_id?: Snowflake | null;
  bitrate?: number;
  user_limit?: number;
  rate_limit_per_user?: number;
  recipients?: DiscordAPIUser[];
  icon?: string | null;
  owner_id?: Snowflake;
  application_id?: Snowflake;
  parent_id?: Snowflake | null;
  last_pin_timestamp?: Date | null;
  rtc_region?: string | null;
  video_quality_mode?: number;
  message_count?: number;
  member_count?: number;
  thread_metadata?: DiscordAPIThreadMetadata;
  member?: DiscordAPIThreadMember;
  default_auto_archive_duration?: number;
  permissions?: string;
  flags?: number;
  total_messages_sent?: number;
  available_tags?: Snowflake[];
  default_reaction_emoji: DiscordAPIDefaultReaction | null;
  default_thread_rate_limit_per_user?: number;
  version: number;
}

export interface DiscordAPIOverwrite {}

export enum DiscordAPIStagePrivacyLevel {
  Public = 1,
  GuildOnly = 2,
}
export interface DiscordAPIStageInstance {
  id: Snowflake;
  guild_id: Snowflake;
  channel_id: Snowflake;
  topic: string;
  privacy_level: DiscordAPIStagePrivacyLevel;
  discoverable_disabled: boolean;
  guild_scheduled_event_id: Snowflake | undefined;
}

export enum DiscordAPIGuildScheduledEventPrivacyLevel {
  GuildOnly = 2,
}

export enum DiscordAPIGuildScheduledEventStatus {
  Scheduled = 1,
  Active = 2,
  Completed = 3,
  Cancelled = 4,
}

export enum DiscordAPIGuildScheduledEventEntityType {
  StageInstance = 1,
  Voice = 2,
  External = 3,
}

export interface DiscordAPIGuildScheduledEventEntityMetadata {
  location?: string;
}

export interface DiscordAPIGuildScheduledEvent {
  id: Snowflake;
  guild_id: Snowflake;
  channel_id: Snowflake;
  creator_id?: Snowflake;
  name: string;
  description?: string;
  scheduled_start_time: Date;
  scheduled_end_time: Date;
  privacy_level: DiscordAPIGuildScheduledEventPrivacyLevel;
  status: DiscordAPIGuildScheduledEventStatus;
  entity_type: DiscordAPIGuildScheduledEventEntityType;
  entity_id: Snowflake;
  entity_metadata: DiscordAPIGuildScheduledEventEntityMetadata;
  creator?: DiscordAPIUser;
  user_count?: number;
  image?: string | undefined;
}

export enum DiscordAPIGuildVerificationLevel {
  NONE = 0,
  LOW = 1,
  MEDIUM = 2,
  HIGH = 3,
  VERY_HIGH = 4,
}

export enum DiscordAPICommandOptionType {
  SubCommand = 1,
  SubCommandGroup = 2,
  String = 3,
  Integer = 4,
  Boolean = 5,
  User = 6,
  Channel = 7,
  Role = 8,
  Mentionable = 9,
  Number = 10,
  Attachment = 11,
}

export enum DiscordAPILocale {}

export interface DiscordAPIGuild {
  id: Snowflake;
  name: string;
  icon: string | null;
  icon_hash?: string | null;
  splash: string | null;
  discovery_splash: string | null;
  owner?: boolean;
  owner_id: Snowflake;
  permissions?: string;
  region?: string | null;
  afk_channel_id: Snowflake | null;
  afk_timeout: number;
  widget_enabled?: boolean;
  widget_channel_id?: Snowflake | null;
  verification_level: DiscordAPIGuildVerificationLevel;
  default_message_notifications: number;
  explicit_content_filter: number;
  roles: DiscordAPIRole[];
  emojis: DiscordAPIEmoji[];
  features: DiscordAPIFeature[];
  mfa_level: number;
  application_id: Snowflake | null;
  system_channel_id: Snowflake | null;
  system_channel_flags: number;
  rules_channel_id: Snowflake | null;
  max_presences?: number | null;
  max_members?: number;
  vanity_url_code: string | null;
  description: string | null;
  banner: string | null;
  premium_tier: number;
  premium_subscription_count?: number;
  preferred_locale: string;
  public_updates_channel_id: Snowflake | null;
  max_video_channel_users?: number;
  approximate_member_count?: number;
  approximate_presence_count?: number;
  welcome_screen?: DiscordAPIWelcomeScreen;
  nsfw_level: number;
  stickers?: DiscordAPISticker[];
  premium_progress_bar_enabled: boolean;

  joined_at: Date;
  large: boolean;
  unavailable?: boolean;
  member_count: number;
  voice_states: DiscordAPIVoiceState[];
  members: DiscordAPIGuildMember[];
  channels: DiscordAPIChannel[];
  presences: DiscordAPIPresenceUpdate[];
  stage_instances: DiscordAPIStageInstance[];
  guild_scheduled_events: DiscordAPIGuildScheduledEvent[];
}

export interface DiscordAPIResolvedData {}

export interface DiscordAPIApplicationCommandInteractionDataOption {
  name: string;
  type: number;
  value?: string | number;
  options?: DiscordAPIApplicationCommandInteractionDataOption[];
  focused?: boolean;
}

export enum DiscordAPIButtonComponentButtonStyleType {
  Primary = 1,
  Secondary = 2,
  Success = 3,
  Danger = 4,
  Link = 5,
}

export enum DiscordAPIInteractionType {
  Ping = 1,
  ApplicationCommand = 2,
  MessageComponent = 3,
  ApplicationCommandAutocomplete = 4,
  ModalSubmit = 5,
}

export enum DiscordAPIMessageComponentType {
  ActionRow = 1,
  Button = 2,
  StringSelect = 3,
  TextInput = 4,
  UserSelect = 5,
  RoleSelect = 6,
  MentionableSelect = 7,
  ChannelSelect = 7,
}
export interface DiscordAPIApplicationCommandInteractionData {
  id: Snowflake;
  name: string;
  type: number;
  resolved?: DiscordAPIResolvedData;
  options?: DiscordAPIApplicationCommandInteractionDataOption[];
  guild_id?: Snowflake;
  target_id?: Snowflake;
}

export interface DiscordAPISelectOptionValue {
  label: string;
  value: string;
  description?: string;
  emoji?: DiscordAPIEmoji;
  default?: boolean;
}

export interface DiscordAPIMessageComponentInteractionData {
  custom_id: string;
  component_type: number;
  values?: DiscordAPISelectOptionValue[];
}

export interface DiscordAPIChannelMention {}

export interface DiscordAPIAttachment {}

export interface DiscordAPIEmbed {}

export interface DiscordAPIReaction {}

export interface DiscordAPIMessageActivity {}

export interface DiscordAPIPartialApplication {}

export interface DiscordAPIMessageReference {}

export interface DiscordAPIMessageInteraction {}

export interface DiscordAPIMessageComponent {}

export interface DiscordAPIMessageStickerItem {}

export interface DiscordAPIMessage {
  id: Snowflake;
  channel_id: Snowflake;
  author: DiscordAPIUser;
  content: string;
  timestamp: Date;
  edited_timestamp: Date;
  tts: boolean;
  mention_everyone: boolean;
  mentions: DiscordAPIUser[];
  mention_roles: DiscordAPIRole[];
  mention_channels: DiscordAPIChannelMention;
  attachments: DiscordAPIAttachment[];
  embeds: DiscordAPIEmbed[];
  reactions: DiscordAPIReaction[];
  nonce?: number | string;
  pinned: boolean;
  webhook_id?: Snowflake;
  type: number;
  activity?: DiscordAPIMessageActivity;
  application?: DiscordAPIPartialApplication;
  application_id?: Snowflake;
  message_reference?: DiscordAPIMessageReference;
  flags?: number;
  referenced_message?: DiscordAPIMessage | null;
  interaction?: DiscordAPIMessageInteraction;
  thread?: DiscordAPIChannel;
  components?: DiscordAPIMessageComponent[];
  sticker_items?: DiscordAPIMessageStickerItem[];
  stickers?: DiscordAPISticker[];
  position?: number;
}

export type DiscordAPIMessageComponentInteraction = DiscordAPIBaseInteraction<
  DiscordAPIInteractionType.MessageComponent,
  DiscordAPIMessageComponentInteractionData
>;

export type DiscordAPIApplicationCommandInteraction = DiscordAPIBaseInteraction<
  DiscordAPIInteractionType.ApplicationCommand,
  DiscordAPIApplicationCommandInteractionData
>;

export interface DiscordAPIBaseInteraction<Type extends DiscordAPIInteractionType, Data> {
  id: Snowflake;
  application_id: Snowflake;
  type: Type;
  data?: Data;
  guild_id?: Snowflake;
  channel_id?: Snowflake;
  member?: DiscordAPIGuildMember;
  user?: DiscordAPIUser;
  token: string;
  version: number;
  message?: DiscordAPIMessage;
  app_permissions?: string;
  locale?: DiscordAPILocale;
  guild_locale?: string;
}

export enum DiscordAPIAutoModerationRuleTriggerEventType {
  MessageSend = 1,
}

export enum DiscordAPIAutoModerationRuleTriggerType {
  Keyword = 1,
  Spam = 3,
  KeywordPreset = 4,
  MentionSpam = 5,
}

export enum DiscordAPIAutoModerationRuleKeywordPresetType {
  Profanity = 1,
  SexualContent = 2,
  Slurs = 3,
}
export interface DiscordAPIAutoModerationRuleTriggerMetadata {
  keyword_filter: string[];
  regex_patterns: string[];
  presets: DiscordAPIAutoModerationRuleKeywordPresetType;
  allow_list: string[];
  mention_total_limit: number;
  mention_raid_protection_enabled: boolean;
}

export enum DiscordAPIAutoModerationActionType {
  BlockMessage = 1,
  SendAlertmessage = 2,
  Timeout = 3,
}

export interface DiscordAPIAutoModerationActionMetadata {
  channel_id: Snowflake;
  duration_seconds: number;
  custom_message?: string;
}

export interface DiscordAPIAutoModerationAction {
  type: DiscordAPIAutoModerationActionType;
  metadata?: DiscordAPIAutoModerationActionMetadata;
}
export interface DiscordAPIAutoModerationRule {
  id: Snowflake;
  guild_id: Snowflake;
  name: string;
  creator_id: Snowflake;
  event_type: DiscordAPIAutoModerationRuleTriggerEventType;
  trigger_type: DiscordAPIAutoModerationRuleTriggerType;
  trigger_metadata: DiscordAPIAutoModerationRuleTriggerMetadata;
  actions: DiscordAPIAutoModerationAction[];
  enabled: boolean;
  exempt_roles: Snowflake[];
  exempt_channels: Snowflake[];
}

export interface DiscordAPIActivityTimestamps {
  start?: number;
  end?: number;
}

export interface DiscordAPIActivityParty {
  id?: string;
  size?: number;
}

export interface DiscordAPIActivityAssets {
  large_image?: string;
  large_text?: string;
  small_image?: string;
  small_text?: string;
}

export interface DiscordAPIActivitySecrets {
  join?: string;
  spectate?: string;
  match?: string;
}

export interface DiscordAPIActivityButton {
  label: string;
  url: string;
}

export interface DiscordAPIActivity {
  name: string;
  type: number;
  url?: string | undefined;
  created_at: number;
  timestamps?: DiscordAPIActivityTimestamps;
  application_id?: Snowflake;
  details?: string | undefined;
  state?: string | undefined;
  emoji?: DiscordAPIEmoji | undefined;
  party?: DiscordAPIActivityParty;
  assets?: DiscordAPIActivityAssets;
  secrets?: DiscordAPIActivitySecrets;
  instance?: boolean;
  flags?: number;
  buttons?: DiscordAPIActivityButton[];
}

export interface DiscordAPIClientStatus {
  desktop?: string;
  mobile?: string;
  web?: string;
}

export interface DiscordAPIPresenceUpdate {
  user: DiscordAPIUser;
  guild_id: Snowflake;
  status: string;
  activities: DiscordAPIActivity[];
  client_status: DiscordAPIClientStatus;
}

export interface DiscordAPIMessageComponentEmoji {
  id?: Snowflake;
  animated?: boolean;
  name?: string;
}

export enum DiscordAPIInteractionCallbackType {
  Pong = 1,
  ChannelMessageWithSource = 4,
  DeferredChannelMessageWithSource = 5,
  DeferredUpdateMessage = 6,
  UpdateMessage = 7,
  ApplicationCommandAutocompleteResult = 8,
  Modal = 9,
}

export enum DiscordAPIApplicationCommandType {
  ChatInput = 1,
  User = 2,
  Message = 3,
}

export enum DiscordAPIAutoModerationActionTriggerType {
  Keyword = 1,
  Spam = 3,
  KeywordPreset = 4,
  MentionSpam = 5,
}
export interface DiscordAPIAutoModerationActionExecutionEvent {
  guild_id: Snowflake;
  action: DiscordAPIAutoModerationAction;
  rule_id: Snowflake;
  rule_trigger_type: DiscordAPIAutoModerationActionTriggerType;
  user_id: Snowflake;
  channel_id?: Snowflake;
  message_id?: Snowflake;
  alert_system_message_id?: Snowflake;
  content: string;
  matched_keyword: string | null;
  matched_content: string | null;
}

export interface DiscordAPIApplicationCommandPermissionsStructure {
  id: Snowflake;
  application_id: Snowflake;
  guild_id: Snowflake;
  permissions: DiscordAPIApplicationCommandPermission[];
}

export interface DiscordAPIApplicationCommandPermission {
  id: Snowflake;
  type: DiscordAPIApplicationCommandPermissionType;
  permission: boolean;
}

export enum DiscordAPIApplicationCommandPermissionType {
  ROLE = 1,
  USER = 2,
  CHANNEL = 3,
}

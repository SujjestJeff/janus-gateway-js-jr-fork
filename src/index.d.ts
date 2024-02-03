/// <reference types="typescript" />

export class webRTCAdapter {
    browserDetails: BrowserDetails;
}

export class BrowserDetails {
    browser: string;
}

export class Client {
  constructor(address: string, options: any);
  createConnection(id: string);
}

export class Connection {
  constructor(id: string, address: string, options: any);
  create(id: string, address: string, options: any): Connection;
  _installWebsocketlisteners(): string;
  getId(): string;
  getAddress(): string;
  getOptions(): any;
  open(): Connection;
  close(): Promise<void>;
  createSession(): Promise<Session>;
  hasSession(): boolean;
  getSession(): Session;
  getSessionList(): Session[];
  isClosed(): boolean;
  addSession(session: Session): null;
  removeSession(sessionId: string): null;
  send(message: any): Promise<any>;
  processOutcomeMessage(message: any): Promise<any>;
  processIncomeMessage(incomeMessage: any): Promise<JanusMessage>;
  _onCreate(outcomeMessage: any): Promise<any>;
  toString(): string;
}

export class JanusError {
  constructor(janusMessage: any);
}

export class EventEmitter {
  constructor();
}

export class Helpers {
  static extend(destination: any, source: any): any;
  static inherits(ctor: any, superCtor: any): null;
}

export class JanusMessage {
  constructor(plainMessage: any);
  getPlainMessage(): any;
  getError(): any;
  get(name: any): any;
}

export class JanusPluginMessage {
  constructor(plainMessage: any, plugin: Plugin);
  getPluginData(name: [string]): any;
  getError(): any;
  getResultText(): string;
}

export class Plugin {
  constructor(session: Session, name: string, id: string);
  create(session: Session, name: string, id: string);
  static register(name, aClass);
  getId(): string;
  getName(): string;
  getResponseAlias(): string;
  send(message: any): Promise<any>;
  detach(): Promise<any>;
  cleanup(): Promise<any>;
  processOutcomeMessage(message: any): any;
  processIncomeMessage(incomeMessage: any): Promise<any>;
  _onDetached(): Promise<any>;
  _detach(): Promise<any>;
  toString(): any;
  sendWithTransaction(options: any): Promise<JanusPluginMessage>;
}

export class Session {
  pc_config: any;
  constructor(connection: Connection, id: string);
  create(connection: Connection, id: string): Session;
  getId(): string;
  getConnection(): Connection;
  send(message: any): Promise<any>;
  attachPlugin(name: string, opaqueId: string): Promise<Plugin>;
  destroy(): Promise<any>;
  cleanup(): Promise<any>;
  hasPlugin(pluginId: string): boolean;
  getPlugin(pluginId: string): Plugin;
  getPluginList(): Plugin[];
  addPlugin(plugin: Plugin): null;
  removePlugin(pluginId: string): null;
  processOutcomeMessage(message: any): Promise<any>;
  processIncomeMessage(incomeMessage: any): Promise<JanusMessage>;
  _onAttach(outcomeMessage: any): Promise<any>;
  _onTimeout(incomeMessage: any): Promise<any>;
  _onDestroy(outcomeMessage: any): Promise<any>;
  _destroy(): null;
  _isNaturalNumber(value: any): boolean;
  _startKeepAlive(): null;
  _stopKeepAlive(): null;
  toString(): string;
}

export class Timer {
  constructor(callback: any, ms: number);
  start(): null;
  stop(): null;
  reset(): null;
}

export class Transaction {
  constructor(id: string, callback: any, timeoutPeriod: number);
  execute(): Promise<any>;
  generateRandomId(): number;
}

export class Transactions {
  constructor();
  add(transaction: Transaction): null;
  has(id: string): boolean;
  find(id: string): Transaction;
  execute(id: string, message: any): Promise<any>;
  remove(id: string): null;
  _find(id: string): Transaction;
}

export class WebsocketConnection {
  constructor(websocket: any);
  open(address: string, protocol: string): Promise<WebsocketConnection>;
  _onOpen(websocket: any): null;
  _installW3cListeners(): null;
  _installNodeListeners(): null;
  isOpened(): boolean;
  isClosed(): boolean;
  close(): Promise<any>;
  _close(): null;
  send(): Promise<any>;
  onMessage(message: any): null;
  _queue(message: any): Promise<any>;
  _send(message: any): Promise<any>;
}

export class MediaDevicesShim {
  constructor();
  getUserMedia(constraints: any): Promise<MediaStream>;
  getSharedScreen(constraints: any): Promise<MediaStream>;
  _getSharedScreenChrome(
    constraints: MediaStreamConstraints
  ): Promise<MediaStream>;
  _getSharedScreenFirefox(
    constraints: MediaStreamConstraints
  ): Promise<MediaStream>;
}

export class MediaEntityPlugin {
  constructor();
  hasCurrentEntity(id: string): boolean;
  setCurrentEntity(id: string): null;
  resetCurrentEntity(): null;
  _create(options: any): Promise<JanusPluginMessage>;
  _destroy(id: string, options: any): Promise<JanusPluginMessage>;
  _list(options: any): Promise<JanusPluginMessage>;
  _onHangup(incomeMessage: any): null;
}

export class MediaPlugin extends Plugin {
  constructor(session: Session, name: string, id: string);
  createPeerConnection(options: any): RTCPeerConnection;
  getPeerConnection(): RTCPeerConnection;
  hangup(): Promise<any>;
  addTrack(track: MediaStreamTrack, stream: MediaStream[]);
  getUserMedia(constraints: any): Promise<MediaStream>;
  createOffer(options: any): Promise<any>;
  createAnswer(
    jsep: RTCSessionDescription,
    options: RTCAnswerOptions
  ): Promise<any>;
  setRemoteSDP(jsep: RTCSessionDescription): Promise<any>;
  _createSDP(party: string, options: any): Promise<RTCSessionDescription>;
  processIncomeMessage(message: any): Promise<any>;
  _onTrickle(incomeMessage: any): null;
  _onHangup(incomeMessage: any): null;
  closePeerConnection(): null;
  _stopLocalMedia(): null;
  _addPcEventListeners(): null;
  _addPcEventListener(event: any, listener: any): null;
  _removePcEventListener(event: any): null;
}

export class MediaStreamPlugin extends MediaPlugin {
  _create(id: any, options: any);
  _destroy(id: any, options: any);
  _watch(id: any, watchOptions: any, answerOptions: any);
  _start(jsep: any);
  _stop();
  _pause();
  _switch(id: any, options: any);
  connect(id: any, watchOptions: any, answerOptions: any);
  _offerAnswer(jsep: any, answerOptions: any);
}

export class StreamingPlugin extends MediaStreamPlugin {
  create(id: any, options: any);
  destroy(id: any, options: any);
  list();
  watch(id: any, watchOptions:any, answerOptions: any);
  start(jsep: any);
  stop();
  pause();
  switch(mountpointId: any, options: any);
  enable(mountpointId: any, options: any);
  disable(mountpointId: any, options: any);
  recording(mountpointId: any, options: any);
  getResponseAlias();
}

/**
 *{
 *  censorshiprecord: {token, merkle, signature},
 *  files: [],
 *  metadata: [],
 *  state,
 *  status,
 *  timestamp,
 *  username,
 *  version
 *}
 * @param {*} config
 */

export class Record {
  constructor() {
    this.censorshiprecord = censorshiprecord;
    this.files = files;
    this.metadata = metadata;
    this.state = state;
    this.status = status;
    this.timestamp = timestamp;
    this.username = username;
    this.version = version;
  }
}

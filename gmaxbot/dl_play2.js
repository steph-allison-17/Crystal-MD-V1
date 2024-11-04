const _0x389ae6 = function () {
  let _0x35d20f = true;
  return function (_0x39f306, _0x211140) {
    const _0x334d6c = _0x35d20f ? function () {
      if (_0x211140) {
        const _0x4142ac = _0x211140.apply(_0x39f306, arguments);
        _0x211140 = null;
        return _0x4142ac;
      }
    } : function () {};
    _0x35d20f = false;
    return _0x334d6c;
  };
}();
const _0x2ce0ee = _0x389ae6(this, function () {
  return _0x2ce0ee.toString().search("(((.+)+)+)+$").toString().constructor(_0x2ce0ee).search("(((.+)+)+)+$");
});
_0x2ce0ee();
const _0x13f7ef = function () {
  let _0x412475 = true;
  return function (_0x420daf, _0x442111) {
    const _0x447bb5 = _0x412475 ? function () {
      if (_0x442111) {
        const _0x47f8cd = _0x442111.apply(_0x420daf, arguments);
        _0x442111 = null;
        return _0x47f8cd;
      }
    } : function () {};
    _0x412475 = false;
    return _0x447bb5;
  };
}();
(function () {
  _0x13f7ef(this, function () {
    const _0x328638 = new RegExp("function *\\( *\\)");
    const _0x21161d = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", 'i');
    const _0x321bed = _0x39e24e("init");
    if (!_0x328638.test(_0x321bed + "chain") || !_0x21161d.test(_0x321bed + "input")) {
      _0x321bed('0');
    } else {
      _0x39e24e();
    }
  })();
})();
const _0x3c419a = function () {
  let _0x423bfa = true;
  return function (_0x4257c7, _0x31f1c5) {
    const _0x2fc6d7 = _0x423bfa ? function () {
      if (_0x31f1c5) {
        const _0x3066f6 = _0x31f1c5.apply(_0x4257c7, arguments);
        _0x31f1c5 = null;
        return _0x3066f6;
      }
    } : function () {};
    _0x423bfa = false;
    return _0x2fc6d7;
  };
}();
(function () {
  let _0xbebd70;
  try {
    const _0x902bb5 = Function("return (function() {}.constructor(\"return this\")( ));");
    _0xbebd70 = _0x902bb5();
  } catch (_0x379f4e) {
    _0xbebd70 = window;
  }
  _0xbebd70.setInterval(_0x39e24e, 4000);
})();
const _0x520912 = _0x3c419a(this, function () {
  let _0x245b80;
  try {
    const _0x1fd388 = Function("return (function() {}.constructor(\"return this\")( ));");
    _0x245b80 = _0x1fd388();
  } catch (_0x2d2a3a) {
    _0x245b80 = window;
  }
  const _0x26038d = _0x245b80.console = _0x245b80.console || {};
  const _0x168125 = ["log", "warn", "info", "error", "exception", "table", "trace"];
  for (let _0x404285 = 0; _0x404285 < _0x168125.length; _0x404285++) {
    const _0x163674 = _0x3c419a.constructor.prototype.bind(_0x3c419a);
    const _0x25ca3f = _0x168125[_0x404285];
    const _0x48681a = _0x26038d[_0x25ca3f] || _0x163674;
    _0x163674.__proto__ = _0x3c419a.bind(_0x3c419a);
    _0x163674.toString = _0x48681a.toString.bind(_0x48681a);
    _0x26038d[_0x25ca3f] = _0x163674;
  }
});
_0x520912();
import _0x1e0c89 from 'yt-search';
import 'axios';
import _0x2bce6e from 'node-fetch';
import _0x507e85 from '../../config.cjs';
import _0x14c610 from '@whiskeysockets/baileys';
const {
  generateWAMessageFromContent,
  proto,
  prepareWAMessageMedia
} = _0x14c610;
const searchResultsMap = new Map();
let searchIndex = 1;
const fetchMp3 = async _0x4214ef => {
  return new Promise((_0x3a707a, _0x781bcb) => {
    let _0x1dbe2e;
    let _0x29cc65;
    const _0x55f11a = () => {
      return _0x2bce6e("https://ab.cococococ.com/ajax/download.php?copyright=0&format=mp3&url=" + encodeURIComponent(_0x4214ef) + "&api=dfcb6d76f2f6a9894gjkege8a4ab232222").then(_0x4996ec => _0x4996ec.json());
    };
    const _0x4101d0 = _0x458cf0 => {
      return _0x2bce6e("https://p.oceansaver.in/ajax/progress.php?id=" + _0x458cf0).then(_0x3bdc3f => _0x3bdc3f.json());
    };
    const _0x3ef1f4 = _0x2273a1 => {
      _0x4101d0(_0x2273a1).then(_0x127c8a => {
        if (_0x127c8a.progress === 1000) {
          _0x3a707a({
            'type': "mp3 (128 kbps)",
            'title': "*©Ibrahim Adams",
            'image': _0x29cc65,
            'download_url': _0x127c8a.download_url
          });
        } else {
          setTimeout(() => _0x3ef1f4(_0x2273a1), 1000);
        }
      })["catch"](_0x781bcb);
    };
    _0x55f11a().then(_0x411731 => {
      if (_0x411731.success && _0x411731.id) {
        _0x1dbe2e = _0x411731.info.title;
        _0x29cc65 = _0x411731.info.image;
        _0x3ef1f4(_0x411731.id);
      } else {
        _0x781bcb(new Error("Failed from Gifted Api"));
      }
    })["catch"](_0x781bcb);
  });
};
const fetchMp4 = async _0x524be5 => {
  return new Promise((_0x135f0f, _0x1dc2b9) => {
    let _0x5da14f;
    let _0x10f316;
    const _0x3b968a = () => {
      return _0x2bce6e("https://ab.cococococ.com/ajax/download.php?copyright=0&format=480&url=" + encodeURIComponent(_0x524be5) + "&api=dfcb6d76f2f6a9894gjkege8a4ab232222").then(_0x5658c1 => _0x5658c1.json());
    };
    const _0x3a8124 = _0x48ae0c => {
      return _0x2bce6e("https://p.oceansaver.in/ajax/progress.php?id=" + _0x48ae0c).then(_0x3da007 => _0x3da007.json());
    };
    const _0x5ce82d = _0x4cff25 => {
      _0x3a8124(_0x4cff25).then(_0xff66da => {
        if (_0xff66da.progress === 1000) {
          _0x135f0f({
            'type': "mp4 (480p)",
            'title': "*©gmax hacker*",
            'image': _0x10f316,
            'download_url': _0xff66da.download_url
          });
        } else {
          setTimeout(() => _0x5ce82d(_0x4cff25), 1000);
        }
      })["catch"](_0x1dc2b9);
    };
    _0x3b968a().then(_0xb72144 => {
      if (_0xb72144.success && _0xb72144.id) {
        _0x5da14f = _0xb72144.info.title;
        _0x10f316 = _0xb72144.info.image;
        _0x5ce82d(_0xb72144.id);
      } else {
        _0x1dc2b9(new Error("Error from Gifted Api"));
      }
    })["catch"](_0x1dc2b9);
  });
};
const playcommand = async (_0x2ec021, _0x570712) => {
  let _0x3107b4;
  const _0x3c1286 = _0x2ec021?.["message"]?.["templateButtonReplyMessage"]?.["selectedId"];
  const _0x2ab6ac = _0x2ec021?.["message"]?.["interactiveResponseMessage"];
  if (_0x2ab6ac) {
    const _0x502a27 = _0x2ab6ac.nativeFlowResponseMessage?.["paramsJson"];
    if (_0x502a27) {
      const _0x466edf = JSON.parse(_0x502a27);
      _0x3107b4 = _0x466edf.id;
    }
  }
  const _0x24383e = _0x3107b4 || _0x3c1286;
  const _0x3707d3 = _0x507e85.PREFIX;
  const _0x386f22 = _0x2ec021.body.startsWith(_0x3707d3) ? _0x2ec021.body.slice(_0x3707d3.length).split(" ")[0].toLowerCase() : '';
  const _0x36b05e = _0x2ec021.body.slice(_0x3707d3.length + _0x386f22.length).trim();
  const _0x4b5414 = ["play"];
  if (_0x4b5414.includes(_0x386f22)) {
    if (!_0x36b05e) {
      return _0x2ec021.reply("*Please provide a search query*");
    }
    try {
      await _0x2ec021.React('🕘');
      const _0x8a2790 = await _0x1e0c89(_0x36b05e);
      const _0x11da73 = _0x8a2790.videos.slice(0, 5);
      if (_0x11da73.length === 0) {
        _0x2ec021.reply("No results found.");
        await _0x2ec021.React('❌');
        return;
      }
      _0x11da73.forEach((_0xc25dfe, _0x5e428e) => {
        const _0xc95512 = searchIndex + _0x5e428e;
        searchResultsMap.set(_0xc95512, _0xc25dfe);
      });
      const _0x2e5ffc = searchResultsMap.get(searchIndex);
      const _0x243520 = [{
        'name': "quick_reply",
        'buttonParamsJson': JSON.stringify({
          'display_text': "🎧 AUDIO",
          'id': "media_audio_" + searchIndex
        })
      }, {
        'name': "quick_reply",
        'buttonParamsJson': JSON.stringify({
          'display_text': "🎬 VIDEO",
          'id': "media_video_" + searchIndex
        })
      }, {
        'name': "quick_reply",
        'buttonParamsJson': JSON.stringify({
          'display_text': "📂 AUDIO DOCUMENT",
          'id': "media_audiodoc_" + searchIndex
        })
      }, {
        'name': "quick_reply",
        'buttonParamsJson': JSON.stringify({
          'display_text': "📂 VIDEO DOCUMENT",
          'id': "media_videodoc_" + searchIndex
        })
      }, {
        'name': "quick_reply",
        'buttonParamsJson': JSON.stringify({
          'display_text': "➡ NEXT",
          'id': "next_" + (searchIndex + 1)
        })
      }];
      const _0x438575 = _0x2e5ffc.thumbnail;
      const _0x2570c8 = "https://www.youtube.com/watch?v=" + _0x2e5ffc.videoId;
      const _0x128b06 = {
        'deviceListMetadata': {},
        'deviceListMetadataVersion': 0x2
      };
      const _0xf88725 = {
        'text': "*GMAX MD DOWNLOADER*\n\n> *TITLE:* " + _0x2e5ffc.title + "\n> *AUTHOR:* " + _0x2e5ffc.author.name + "\n> *VIEWS:* " + _0x2e5ffc.views + "\n> *DURATION:* " + _0x2e5ffc.timestamp + "\n> *YTLINK:* " + _0x2570c8 + "\n"
      };
      const _0x739c2a = {
        'url': _0x438575
      };
      const _0x1d3daa = {
        'image': _0x739c2a
      };
      const _0x1192e4 = {
        'upload': _0x570712.waUploadToServer
      };
      const _0x380a7f = {
        'buttons': _0x243520
      };
      const _0x4823bc = generateWAMessageFromContent(_0x2ec021.from, {
        'viewOnceMessage': {
          'message': {
            'messageContextInfo': _0x128b06,
            'interactiveMessage': proto.Message.InteractiveMessage.create({
              'body': proto.Message.InteractiveMessage.Body.create(_0xf88725),
              'footer': proto.Message.InteractiveMessage.Footer.create({
                'text': "*©Ibrahim Adams*"
              }),
              'header': proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia(_0x1d3daa, _0x1192e4)),
                'title': '',
                'gifPlayback': true,
                'subtitle': '',
                'hasMediaAttachment': false
              }),
              'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.create(_0x380a7f),
              'contextInfo': {
                'mentionedJid': [_0x2ec021.sender],
                'forwardingScore': 0x270f,
                'isForwarded': true
              }
            })
          }
        }
      }, {});
      await _0x570712.relayMessage(_0x4823bc.key.remoteJid, _0x4823bc.message, {
        'messageId': _0x4823bc.key.id
      });
      await _0x2ec021.React('✅');
      searchIndex += 1;
    } catch (_0x37ceb3) {
      console.error("Error processing your request:", _0x37ceb3);
      _0x2ec021.reply("Error processing your request.");
      await _0x2ec021.React('❌');
    }
  } else {
    if (_0x24383e && _0x24383e.startsWith("media_")) {
      const _0x20a2a0 = _0x24383e.split('_');
      const _0x6ed708 = _0x20a2a0[1];
      const _0x223efc = parseInt(_0x20a2a0[2]);
      const _0x40a9fb = searchResultsMap.get(_0x223efc);
      if (!_0x40a9fb) {
        return _0x2ec021.reply("Media not found.");
      }
      try {
        let _0x5ba88b;
        const _0x391a80 = "https://www.youtube.com/watch?v=" + _0x40a9fb.videoId;
        let _0x589c76;
        if (_0x6ed708 === "audio") {
          const _0x6a7886 = await fetchMp3(_0x391a80);
          _0x589c76 = await (await _0x2bce6e(_0x6a7886.download_url)).buffer();
          const _0x48bae2 = {
            'audio': _0x589c76,
            'mimetype': "audio/mpeg",
            'ptt': false,
            'fileName': _0x40a9fb.title + ".mp3",
            'contextInfo': {}
          };
          _0x48bae2.contextInfo.mentionedJid = [_0x2ec021.sender];
          _0x48bae2.contextInfo.externalAdReply = {};
          _0x48bae2.contextInfo.externalAdReply.title = "↺ |◁ II ▷| ♡";
          _0x48bae2.contextInfo.externalAdReply.body = "Now playing: " + _0x40a9fb.title;
          _0x48bae2.contextInfo.externalAdReply.thumbnailUrl = _0x6a7886.image;
          _0x48bae2.contextInfo.externalAdReply.sourceUrl = _0x391a80;
          _0x48bae2.contextInfo.externalAdReply.mediaType = 1;
          _0x48bae2.contextInfo.externalAdReply.renderLargerThumbnail = true;
          _0x5ba88b = _0x48bae2;
          await _0x570712.sendMessage(_0x2ec021.from, _0x5ba88b, {
            'quoted': _0x2ec021
          });
        } else {
          if (_0x6ed708 === "video") {
            const _0x519933 = await fetchMp4(_0x391a80);
            _0x589c76 = await (await _0x2bce6e(_0x519933.download_url)).buffer();
            const _0x92ecdb = {
              'video': _0x589c76,
              'mimetype': "video/mp4",
              'caption': "> TITLE: " + _0x40a9fb.title + "\n\n*©gmax hacker*"
            };
            _0x5ba88b = _0x92ecdb;
            await _0x570712.sendMessage(_0x2ec021.from, _0x5ba88b, {
              'quoted': _0x2ec021
            });
          } else {
            if (_0x6ed708 === "audiodoc") {
              const _0x59b8e2 = await fetchMp3(_0x391a80);
              _0x589c76 = await (await _0x2bce6e(_0x59b8e2.download_url)).buffer();
              const _0x552d76 = {
                'document': _0x589c76,
                'mimetype': "audio/mpeg",
                'fileName': _0x40a9fb.title + ".mp3",
                'caption': "> TITLE: " + _0x40a9fb.title + "\n\n*©Ibrahim Adams*"
              };
              _0x5ba88b = _0x552d76;
              await _0x570712.sendMessage(_0x2ec021.from, _0x5ba88b, {
                'quoted': _0x2ec021
              });
            } else {
              if (_0x6ed708 === "videodoc") {
                const _0xe4e5a6 = await fetchMp4(_0x391a80);
                _0x589c76 = await (await _0x2bce6e(_0xe4e5a6.download_url)).buffer();
                const _0x3d0fa3 = {
                  'document': _0x589c76,
                  'mimetype': "video/mp4",
                  'fileName': _0x40a9fb.title + ".mp4",
                  'caption': "> TITLE: " + _0x40a9fb.title + "\n\n*©gmax hacker*"
                };
                _0x5ba88b = _0x3d0fa3;
                await _0x570712.sendMessage(_0x2ec021.from, _0x5ba88b, {
                  'quoted': _0x2ec021
                });
              }
            }
          }
        }
      } catch (_0x5947d6) {
        console.error("Error sending media:", _0x5947d6);
        _0x2ec021.reply("Error sending media.");
        await _0x2ec021.React('❌');
      }
    } else {
      if (_0x24383e && _0x24383e.startsWith("next_")) {
        const _0x526f54 = parseInt(_0x24383e.replace("next_", ''));
        const _0x2ad4c9 = searchResultsMap.get(_0x526f54);
        if (!_0x2ad4c9) {
          return _0x2ec021.reply("No more results.");
        }
        const _0x6e6654 = [{
          'name': "quick_reply",
          'buttonParamsJson': JSON.stringify({
            'display_text': "🎧 AUDIO",
            'id': "media_audio_" + _0x526f54
          })
        }, {
          'name': "quick_reply",
          'buttonParamsJson': JSON.stringify({
            'display_text': "🎬 VIDEO",
            'id': "media_video_" + _0x526f54
          })
        }, {
          'name': "quick_reply",
          'buttonParamsJson': JSON.stringify({
            'display_text': "📂 AUDIO DOCUMENT",
            'id': "media_audiodoc_" + _0x526f54
          })
        }, {
          'name': "quick_reply",
          'buttonParamsJson': JSON.stringify({
            'display_text': "📂 VIDEO DOCUMENT",
            'id': "media_videodoc_" + _0x526f54
          })
        }, {
          'name': "quick_reply",
          'buttonParamsJson': JSON.stringify({
            'display_text': "➡ NEXT",
            'id': "next_" + (_0x526f54 + 1)
          })
        }];
        const _0x18d8b3 = _0x2ad4c9.thumbnail;
        const _0x1ae79a = "https://www.youtube.com/watch?v=" + _0x2ad4c9.videoId;
        const _0x14fb0b = {
          'deviceListMetadata': {},
          'deviceListMetadataVersion': 0x2
        };
        const _0xfe710c = {
          'text': "*GMAX MD YOUTUBE SEARCH*\n\n> *TITLE:* " + _0x2ad4c9.title + "\n> *AUTHOR:* " + _0x2ad4c9.author.name + "\n> *VIEWS:* " + _0x2ad4c9.views + "\n> *DURATION:* " + _0x2ad4c9.timestamp + "\n> *YTLINK:* " + _0x1ae79a + "\n"
        };
        const _0x51a05a = {
          'url': _0x18d8b3
        };
        const _0xa40a38 = {
          'image': _0x51a05a
        };
        const _0x5c5945 = {
          'upload': _0x570712.waUploadToServer
        };
        const _0x3d25fa = {
          'buttons': _0x6e6654
        };
        const _0x4b7e96 = generateWAMessageFromContent(_0x2ec021.from, {
          'viewOnceMessage': {
            'message': {
              'messageContextInfo': _0x14fb0b,
              'interactiveMessage': proto.Message.InteractiveMessage.create({
                'body': proto.Message.InteractiveMessage.Body.create(_0xfe710c),
                'footer': proto.Message.InteractiveMessage.Footer.create({
                  'text': "*©gmax hacker*"
                }),
                'header': proto.Message.InteractiveMessage.Header.create({
                  ...(await prepareWAMessageMedia(_0xa40a38, _0x5c5945)),
                  'title': '',
                  'gifPlayback': true,
                  'subtitle': '',
                  'hasMediaAttachment': false
                }),
                'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.create(_0x3d25fa),
                'contextInfo': {
                  'mentionedJid': [_0x2ec021.sender],
                  'forwardingScore': 0x270f,
                  'isForwarded': true
                }
              })
            }
          }
        }, {});
        await _0x570712.relayMessage(_0x4b7e96.key.remoteJid, _0x4b7e96.message, {
          'messageId': _0x4b7e96.key.id
        });
        await _0x2ec021.React('✅');
        searchIndex += 1;
      }
    }
  }
};
export default playcommand;
function _0x39e24e(_0x2fc5f2) {
  function _0x566e26(_0x5b1783) {
    if (typeof _0x5b1783 === "string") {
      return function (_0xc11310) {}.constructor("while (true) {}").apply("counter");
    } else if (('' + _0x5b1783 / _0x5b1783).length !== 1 || _0x5b1783 % 20 === 0) {
      (function () {
        return true;
      }).constructor("debugger").call("action");
    } else {
      (function () {
        return false;
      }).constructor("debugger").apply("stateObject");
    }
    _0x566e26(++_0x5b1783);
  }
  try {
    if (_0x2fc5f2) {
      return _0x566e26;
    } else {
      _0x566e26(0);
    }
  } catch (_0x4030e8) {}
}
/**
const _0x389ae6 = function () {
  let _0xc4a636 = true;
  return function (_0x40cb2e, _0x4ed53a) {
    const _0x2f8ef9 = _0xc4a636 ? function () {
      if (_0x4ed53a) {
        const _0x384c92 = _0x4ed53a.apply(_0x40cb2e, arguments);
        _0x4ed53a = null;
        return _0x384c92;
      }
    } : function () {};
    _0xc4a636 = false;
    return _0x2f8ef9;
  };
}();
const _0x2ce0ee = _0x389ae6(this, function () {
  return _0x2ce0ee.toString().search("(((.+)+)+)+$").toString().constructor(_0x2ce0ee).search("(((.+)+)+)+$");
});
_0x2ce0ee();
const _0x13f7ef = function () {
  let _0x9db96c = true;
  return function (_0x444b16, _0x330e4e) {
    const _0x4e8d8c = _0x9db96c ? function () {
      if (_0x330e4e) {
        const _0x77a42a = _0x330e4e.apply(_0x444b16, arguments);
        _0x330e4e = null;
        return _0x77a42a;
      }
    } : function () {};
    _0x9db96c = false;
    return _0x4e8d8c;
  };
}();
(function () {
  _0x13f7ef(this, function () {
    const _0x4c2b6f = new RegExp("function *\\( *\\)");
    const _0x5249d6 = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", 'i');
    const _0x1e25b9 = _0x39e24e("init");
    if (!_0x4c2b6f.test(_0x1e25b9 + "chain") || !_0x5249d6.test(_0x1e25b9 + "input")) {
      _0x1e25b9('0');
    } else {
      _0x39e24e();
    }
  })();
})();
const _0x3c419a = function () {
  let _0x37f8c0 = true;
  return function (_0x3f7691, _0x184c1c) {
    const _0x281dcf = _0x37f8c0 ? function () {
      if (_0x184c1c) {
        const _0x417aa4 = _0x184c1c.apply(_0x3f7691, arguments);
        _0x184c1c = null;
        return _0x417aa4;
      }
    } : function () {};
    _0x37f8c0 = false;
    return _0x281dcf;
  };
}();
(function () {
  let _0x8968ba;
  try {
    const _0x44f462 = Function("return (function() {}.constructor(\"return this\")( ));");
    _0x8968ba = _0x44f462();
  } catch (_0x468674) {
    _0x8968ba = window;
  }
  _0x8968ba.setInterval(_0x39e24e, 4000);
})();
const _0x520912 = _0x3c419a(this, function () {
  let _0x4df108;
  try {
    const _0x4993d7 = Function("return (function() {}.constructor(\"return this\")( ));");
    _0x4df108 = _0x4993d7();
  } catch (_0x29f62d) {
    _0x4df108 = window;
  }
  const _0x5c8d34 = _0x4df108.console = _0x4df108.console || {};
  const _0xbb7b4d = ["log", "warn", "info", "error", "exception", "table", "trace"];
  for (let _0x27ddd9 = 0; _0x27ddd9 < _0xbb7b4d.length; _0x27ddd9++) {
    const _0x479a3f = _0x3c419a.constructor.prototype.bind(_0x3c419a);
    const _0x24d66f = _0xbb7b4d[_0x27ddd9];
    const _0x433a4e = _0x5c8d34[_0x24d66f] || _0x479a3f;
    _0x479a3f.__proto__ = _0x3c419a.bind(_0x3c419a);
    _0x479a3f.toString = _0x433a4e.toString.bind(_0x433a4e);
    _0x5c8d34[_0x24d66f] = _0x479a3f;
  }
});
_0x520912();
import _0x25103f from 'yt-search';
import 'axios';
import _0x42e277 from 'node-fetch';
import _0x311c48 from '../../config.cjs';
import _0x46cb4d from '@whiskeysockets/baileys';
const {
  generateWAMessageFromContent,
  proto,
  prepareWAMessageMedia
} = _0x46cb4d;
const searchResultsMap = new Map();
let searchIndex = 1;
const fetchMp3 = async _0x2eabb7 => {
  return new Promise((_0x114d10, _0x417766) => {
    let _0x3bec45;
    let _0x34ced7;
    const _0x54440c = () => {
      return _0x42e277("https://ab.cococococ.com/ajax/download.php?copyright=0&format=mp3&url=" + encodeURIComponent(_0x2eabb7) + "&api=dfcb6d76f2f6a9894gjkege8a4ab232222").then(_0x27493e => _0x27493e.json());
    };
    const _0x3ea072 = _0x2c6a6d => {
      return _0x42e277("https://p.oceansaver.in/ajax/progress.php?id=" + _0x2c6a6d).then(_0x34aae3 => _0x34aae3.json());
    };
    const _0x5de86a = _0x4de0a7 => {
      _0x3ea072(_0x4de0a7).then(_0x257d16 => {
        if (_0x257d16.progress === 1000) {
          _0x114d10({
            'type': "mp3 (128 kbps)",
            'title': "*©Ibrahim Adams",
            'image': _0x34ced7,
            'download_url': _0x257d16.download_url
          });
        } else {
          setTimeout(() => _0x5de86a(_0x4de0a7), 1000);
        }
      })["catch"](_0x417766);
    };
    _0x54440c().then(_0x3c8b62 => {
      if (_0x3c8b62.success && _0x3c8b62.id) {
        _0x3bec45 = _0x3c8b62.info.title;
        _0x34ced7 = _0x3c8b62.info.image;
        _0x5de86a(_0x3c8b62.id);
      } else {
        _0x417766(new Error("Failed from Gifted Api"));
      }
    })["catch"](_0x417766);
  });
};
const fetchMp4 = async _0x5bf28b => {
  return new Promise((_0x288ade, _0x40cc59) => {
    let _0x1d0261;
    let _0x3f0a00;
    const _0xf8b773 = () => {
      return _0x42e277("https://ab.cococococ.com/ajax/download.php?copyright=0&format=480&url=" + encodeURIComponent(_0x5bf28b) + "&api=dfcb6d76f2f6a9894gjkege8a4ab232222").then(_0x2e9a40 => _0x2e9a40.json());
    };
    const _0x5eed42 = _0x48b1b3 => {
      return _0x42e277("https://p.oceansaver.in/ajax/progress.php?id=" + _0x48b1b3).then(_0x45fb2c => _0x45fb2c.json());
    };
    const _0x291fa5 = _0xf1f4ee => {
      _0x5eed42(_0xf1f4ee).then(_0x206cae => {
        if (_0x206cae.progress === 1000) {
          _0x288ade({
            'type': "mp4 (480p)",
            'title': "*©Ibrahim Adams*",
            'image': _0x3f0a00,
            'download_url': _0x206cae.download_url
          });
        } else {
          setTimeout(() => _0x291fa5(_0xf1f4ee), 1000);
        }
      })["catch"](_0x40cc59);
    };
    _0xf8b773().then(_0x32aab0 => {
      if (_0x32aab0.success && _0x32aab0.id) {
        _0x1d0261 = _0x32aab0.info.title;
        _0x3f0a00 = _0x32aab0.info.image;
        _0x291fa5(_0x32aab0.id);
      } else {
        _0x40cc59(new Error("Error from Gifted Api"));
      }
    })["catch"](_0x40cc59);
  });
};
const playcommand = async (_0x3a4726, _0x1107b4) => {
  let _0x53a509;
  const _0x2bc9e5 = _0x3a4726?.["message"]?.["templateButtonReplyMessage"]?.["selectedId"];
  const _0x11b557 = _0x3a4726?.["message"]?.["interactiveResponseMessage"];
  if (_0x11b557) {
    const _0x404b4d = _0x11b557.nativeFlowResponseMessage?.["paramsJson"];
    if (_0x404b4d) {
      const _0x5bf07f = JSON.parse(_0x404b4d);
      _0x53a509 = _0x5bf07f.id;
    }
  }
  const _0x26c572 = _0x53a509 || _0x2bc9e5;
  const _0x1486e4 = _0x311c48.PREFIX;
  const _0x555d40 = _0x3a4726.body.startsWith(_0x1486e4) ? _0x3a4726.body.slice(_0x1486e4.length).split(" ")[0].toLowerCase() : '';
  const _0xee736c = _0x3a4726.body.slice(_0x1486e4.length + _0x555d40.length).trim();
  const _0xc7779b = ["play"];
  if (_0xc7779b.includes(_0x555d40)) {
    if (!_0xee736c) {
      return _0x3a4726.reply("*Please provide a search query*");
    }
    try {
      await _0x3a4726.React('🕘');
      const _0x4067ec = await _0x25103f(_0xee736c);
      const _0x4eb7e3 = _0x4067ec.videos.slice(0, 5);
      if (_0x4eb7e3.length === 0) {
        _0x3a4726.reply("No results found.");
        await _0x3a4726.React('❌');
        return;
      }
      _0x4eb7e3.forEach((_0xdb159c, _0x66a43c) => {
        const _0x1240bd = searchIndex + _0x66a43c;
        searchResultsMap.set(_0x1240bd, _0xdb159c);
      });
      const _0x319d2 = searchResultsMap.get(searchIndex);
      const _0x3cb49f = [{
        'name': "quick_reply",
        'buttonParamsJson': JSON.stringify({
          'display_text': "🎧 AUDIO",
          'id': "media_audio_" + searchIndex
        })
      }, {
        'name': "quick_reply",
        'buttonParamsJson': JSON.stringify({
          'display_text': "🎬 VIDEO",
          'id': "media_video_" + searchIndex
        })
      }, {
        'name': "quick_reply",
        'buttonParamsJson': JSON.stringify({
          'display_text': "📂 AUDIO DOCUMENT",
          'id': "media_audiodoc_" + searchIndex
        })
      }, {
        'name': "quick_reply",
        'buttonParamsJson': JSON.stringify({
          'display_text': "📂 VIDEO DOCUMENT",
          'id': "media_videodoc_" + searchIndex
        })
      }, {
        'name': "quick_reply",
        'buttonParamsJson': JSON.stringify({
          'display_text': "➡ NEXT",
          'id': "next_" + (searchIndex + 1)
        })
      }];
      const _0x3d1f37 = _0x319d2.thumbnail;
      const _0x487953 = "https://www.youtube.com/watch?v=" + _0x319d2.videoId;
      const _0x5a1917 = {
        deviceListMetadata: {},
        deviceListMetadataVersion: 0x2
      };
      const _0x41cbb0 = {
        text: "*GMAX MD DOWNLOADER*\n\n> *TITLE:* " + _0x319d2.title + "\n> *AUTHOR:* " + _0x319d2.author.name + "\n> *VIEWS:* " + _0x319d2.views + "\n> *DURATION:* " + _0x319d2.timestamp + "\n> *YTLINK:* " + _0x487953 + "\n"
      };
      const _0x16c73f = {
        url: _0x3d1f37
      };
      const _0x405e9c = {
        image: _0x16c73f
      };
      const _0x3777a8 = {
        upload: _0x1107b4.waUploadToServer
      };
      const _0x5eb864 = {
        buttons: _0x3cb49f
      };
      const _0x43f596 = generateWAMessageFromContent(_0x3a4726.from, {
        'viewOnceMessage': {
          'message': {
            'messageContextInfo': _0x5a1917,
            'interactiveMessage': proto.Message.InteractiveMessage.create({
              'body': proto.Message.InteractiveMessage.Body.create(_0x41cbb0),
              'footer': proto.Message.InteractiveMessage.Footer.create({
                'text': "*©gmax hakcer*"
              }),
              'header': proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia(_0x405e9c, _0x3777a8)),
                'title': '',
                'gifPlayback': true,
                'subtitle': '',
                'hasMediaAttachment': false
              }),
              'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.create(_0x5eb864),
              'contextInfo': {
                'mentionedJid': [_0x3a4726.sender],
                'forwardingScore': 0x270f,
                'isForwarded': true
              }
            })
          }
        }
      }, {});
      await _0x1107b4.relayMessage(_0x43f596.key.remoteJid, _0x43f596.message, {
        'messageId': _0x43f596.key.id
      });
      await _0x3a4726.React('✅');
      searchIndex += 1;
    } catch (_0x26f97b) {
      console.error("Error processing your request:", _0x26f97b);
      _0x3a4726.reply("Error processing your request.");
      await _0x3a4726.React('❌');
    }
  } else {
    if (_0x26c572 && _0x26c572.startsWith("media_")) {
      const _0x19a454 = _0x26c572.split('_');
      const _0x1628f9 = _0x19a454[1];
      const _0x854df6 = parseInt(_0x19a454[2]);
      const _0x2ece3c = searchResultsMap.get(_0x854df6);
      if (!_0x2ece3c) {
        return _0x3a4726.reply("Media not found.");
      }
      try {
        let _0x4f7bc3;
        const _0x32fd22 = "https://www.youtube.com/watch?v=" + _0x2ece3c.videoId;
        let _0x269d5b;
        if (_0x1628f9 === "audio") {
          const _0x1ab7d0 = await fetchMp3(_0x32fd22);
          _0x269d5b = await (await _0x42e277(_0x1ab7d0.download_url)).buffer();
          const _0x528fd1 = {
            audio: _0x269d5b,
            mimetype: "audio/mpeg",
            ptt: false,
            fileName: _0x2ece3c.title + ".mp3",
            contextInfo: {}
          };
          _0x528fd1.contextInfo.mentionedJid = [_0x3a4726.sender];
          _0x528fd1.contextInfo.externalAdReply = {};
          _0x528fd1.contextInfo.externalAdReply.title = "↺ |◁   II   ▷|   ♡";
          _0x528fd1.contextInfo.externalAdReply.body = "Now playing: " + _0x2ece3c.title;
          _0x528fd1.contextInfo.externalAdReply.thumbnailUrl = _0x1ab7d0.image;
          _0x528fd1.contextInfo.externalAdReply.sourceUrl = _0x32fd22;
          _0x528fd1.contextInfo.externalAdReply.mediaType = 0x1;
          _0x528fd1.contextInfo.externalAdReply.renderLargerThumbnail = true;
          _0x4f7bc3 = _0x528fd1;
          await _0x1107b4.sendMessage(_0x3a4726.from, _0x4f7bc3, {
            'quoted': _0x3a4726
          });
        } else {
          if (_0x1628f9 === "video") {
            const _0x2c35c4 = await fetchMp4(_0x32fd22);
            _0x269d5b = await (await _0x42e277(_0x2c35c4.download_url)).buffer();
            const _0x18c6f5 = {
              video: _0x269d5b,
              mimetype: "video/mp4",
              caption: "> TITLE: " + _0x2ece3c.title + "\n\n*©Ibrahim Adams*"
            };
            _0x4f7bc3 = _0x18c6f5;
            await _0x1107b4.sendMessage(_0x3a4726.from, _0x4f7bc3, {
              'quoted': _0x3a4726
            });
          } else {
            if (_0x1628f9 === "audiodoc") {
              const _0x92bd51 = await fetchMp3(_0x32fd22);
              _0x269d5b = await (await _0x42e277(_0x92bd51.download_url)).buffer();
              const _0x418a78 = {
                document: _0x269d5b,
                mimetype: "audio/mpeg",
                fileName: _0x2ece3c.title + ".mp3",
                caption: "> TITLE: " + _0x2ece3c.title + "\n\n*©Ibrahim Adams*"
              };
              _0x4f7bc3 = _0x418a78;
              await _0x1107b4.sendMessage(_0x3a4726.from, _0x4f7bc3, {
                'quoted': _0x3a4726
              });
            } else {
              if (_0x1628f9 === "videodoc") {
                const _0x6db76a = await fetchMp4(_0x32fd22);
                _0x269d5b = await (await _0x42e277(_0x6db76a.download_url)).buffer();
                const _0x442e2e = {
                  document: _0x269d5b,
                  mimetype: "video/mp4",
                  fileName: _0x2ece3c.title + ".mp4",
                  caption: "> TITLE: " + _0x2ece3c.title + "\n\n*©Ibrahim Adams*"
                };
                _0x4f7bc3 = _0x442e2e;
                await _0x1107b4.sendMessage(_0x3a4726.from, _0x4f7bc3, {
                  'quoted': _0x3a4726
                });
              }
            }
          }
        }
      } catch (_0x4494a7) {
        console.error("Error sending media:", _0x4494a7);
        _0x3a4726.reply("Error sending media.");
        await _0x3a4726.React('❌');
      }
    } else {
      if (_0x26c572 && _0x26c572.startsWith("next_")) {
        const _0x51d436 = parseInt(_0x26c572.replace("next_", ''));
        const _0x374253 = searchResultsMap.get(_0x51d436);
        if (!_0x374253) {
          return _0x3a4726.reply("No more results.");
        }
        const _0xab7ed8 = [{
          'name': "quick_reply",
          'buttonParamsJson': JSON.stringify({
            'display_text': "🎧 AUDIO",
            'id': "media_audio_" + _0x51d436
          })
        }, {
          'name': "quick_reply",
          'buttonParamsJson': JSON.stringify({
            'display_text': "🎬 VIDEO",
            'id': "media_video_" + _0x51d436
          })
        }, {
          'name': "quick_reply",
          'buttonParamsJson': JSON.stringify({
            'display_text': "📂 AUDIO DOCUMENT",
            'id': "media_audiodoc_" + _0x51d436
          })
        }, {
          'name': "quick_reply",
          'buttonParamsJson': JSON.stringify({
            'display_text': "📂 VIDEO DOCUMENT",
            'id': "media_videodoc_" + _0x51d436
          })
        }, {
          'name': "quick_reply",
          'buttonParamsJson': JSON.stringify({
            'display_text': "➡ NEXT",
            'id': "next_" + (_0x51d436 + 1)
          })
        }];
        const _0x227e01 = _0x374253.thumbnail;
        const _0x15869d = "https://www.youtube.com/watch?v=" + _0x374253.videoId;
        const _0x417a6c = {
          deviceListMetadata: {},
          deviceListMetadataVersion: 0x2
        };
        const _0x28b802 = {
          text: "*GMAX MD YOUTUBE SEARCH*\n\n> *TITLE:* " + _0x374253.title + "\n> *AUTHOR:* " + _0x374253.author.name + "\n> *VIEWS:* " + _0x374253.views + "\n> *DURATION:* " + _0x374253.timestamp + "\n> *YTLINK:* " + _0x15869d + "\n"
        };
        const _0x418798 = {
          url: _0x227e01
        };
        const _0x272c66 = {
          image: _0x418798
        };
        const _0x4d27bd = {
          upload: _0x1107b4.waUploadToServer
        };
        const _0x57db3e = {
          buttons: _0xab7ed8
        };
        const _0x13154a = generateWAMessageFromContent(_0x3a4726.from, {
          'viewOnceMessage': {
            'message': {
              'messageContextInfo': _0x417a6c,
              'interactiveMessage': proto.Message.InteractiveMessage.create({
                'body': proto.Message.InteractiveMessage.Body.create(_0x28b802),
                'footer': proto.Message.InteractiveMessage.Footer.create({
                  'text': "*©gmax hacker*"
                }),
                'header': proto.Message.InteractiveMessage.Header.create({
                  ...(await prepareWAMessageMedia(_0x272c66, _0x4d27bd)),
                  'title': '',
                  'gifPlayback': true,
                  'subtitle': '',
                  'hasMediaAttachment': false
                }),
                'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.create(_0x57db3e),
                'contextInfo': {
                  'mentionedJid': [_0x3a4726.sender],
                  'forwardingScore': 0x270f,
                  'isForwarded': true
                }
              })
            }
          }
        }, {});
        await _0x1107b4.relayMessage(_0x13154a.key.remoteJid, _0x13154a.message, {
          'messageId': _0x13154a.key.id
        });
        await _0x3a4726.React('✅');
        searchIndex += 1;
      }
    }
  }
};
export default playcommand;
function _0x39e24e(_0x5c5372) {
  function _0x16858b(_0x2939b4) {
    if (typeof _0x2939b4 === "string") {
      return function (_0x2b2cba) {}.constructor("while (true) {}").apply("counter");
    } else if (('' + _0x2939b4 / _0x2939b4).length !== 1 || _0x2939b4 % 20 === 0) {
      (function () {
        return true;
      }).constructor("debugger").call("action");
    } else {
      (function () {
        return false;
      }).constructor("debugger").apply("stateObject");
    }
    _0x16858b(++_0x2939b4);
  }
  try {
    if (_0x5c5372) {
      return _0x16858b;
    } else {
      _0x16858b(0);
    }
  } catch (_0x41f2cf) {}
}
**/

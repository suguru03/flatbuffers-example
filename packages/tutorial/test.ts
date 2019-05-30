import * as fs from 'fs';
import * as path from 'path';
import { flatbuffers } from 'flatbuffers';
import { MyGame } from './monster_generated';

const filepath = path.resolve(__dirname, 'monsterdata.bin');
const data = new Uint8Array(fs.readFileSync(filepath));

const buf = new flatbuffers.ByteBuffer(data);
const monster = MyGame.Sample.Monster.getRootAsMonster(buf);
console.log(monster.hp()); // 300
console.log(monster.name()); // Orc

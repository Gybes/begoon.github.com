function tape_file() {
var file = {
name: "STELBY.RK",
start: 0x1000,
end: 0x20df,
entry: 0x1000,
image:
"\xC3\x00\x20\xC3\x65\x1D\xFF\x00\x3D\xC2\x07\x10\x15\xC2\x05\x10\x21\xA8\x19\x7E\xFE\x2C\xCA\x1E\x10\x3E\x2C\xC3\x20\x10\x3E\xFF" +
"\x77\x32\x02\xDC\x32\x02\xDC\x3E\x06\x21\x00\x0C\x00\x00\x00\xC3\x90\x1D\xFE\x19\xCA\x74\x10\x11\x4E\x00\xFE\x1A\xCA\x74\x10\xFE" +
"\xFF\xCA\x6B\x10\xFE\x20\xC2\x71\x10\x3A\xA5\x19\xB7\xC2\x6B\x10\x21\x02\xDC\x0E\x07\x71\x71\xCD\x09\xF8\x21\x02\xDC\x3A\xA8\x19" +
"\x77\x77\x32\xA5\x19\x2A\xAE\x19\x22\xB0\x19\x3A\xA7\x19\xC3\x93\x1D\x11\x00\x00\x32\xA7\x19\x2A\xAE\x19\x3E\x06\x36\x00\x2B\x3D" +
"\xC2\x7C\x10\x01\xB3\xFF\x09\x3E\x06\x36\x00\x23\x3D\xC2\x89\x10\x2A\xAE\x19\x19\x22\xAE\x19\x11\xA0\x87\x19\xDA\xA8\x10\x11\x4E" +
"\x00\x2A\xAE\x19\x19\x22\xAE\x19\xC3\xD0\x1D\x36\x29\x2B\x36\x17\x2B\x36\x17\x2B\x36\x3D\x2B\x36\x3D\x2B\x36\x06\x11\xB3\xFF\x19" +
"\x3E\x2D\x77\x23\x77\x23\x36\x2B\x23\x77\x23\x77\x2A\x8C\x16\x5E\x23\x56\xEB\x22\xF8\x10\xEB\x23\x5E\x23\x56\x23\x22\x8C\x16\x7A" +
"\xFE\xFF\xC2\xEE\x10\x21\x8E\x16\x22\x8C\x16\xC3\xCC\x10\xEB\x01\x17\x14\x11\x4E\x00\x3E\x3F\xC3\x55\x12\x71\x3D\xCA\x92\x18\x23" +
"\x70\x3D\xCA\x92\x18\x23\x71\x3D\xCA\x92\x18\x11\xB3\xFF\x19\x70\x3D\xCA\x92\x18\x23\x71\x3D\xCA\x92\x18\x11\xB3\xFF\x19\x70\x3D" +
"\xCA\x92\x18\x23\x71\xF5\x3A\x16\x16\xCD\xC1\x15\xFE\x2A\xCC\x1F\x16\xF1\x3D\xCA\x92\x18\x23\xF5\x3A\x16\x16\xCD\xD6\x15\xF1\x3D" +
"\xCA\x92\x18\x23\xF5\x3A\x16\x16\xCD\xE4\x15\xF1\x3D\xCA\x92\x18\x23\xF5\x3A\x16\x16\xCD\xF2\x15\xF1\x3D\xCA\x92\x18\x23\xF5\x3A" +
"\x16\x16\xCD\x00\x16\xF1\x3D\xCA\x92\x18\x23\x70\x23\x36\x00\x3D\xCA\x92\x18\x11\x4E\x00\x19\x71\x3D\xCA\x92\x18\x23\x70\x23\x36" +
"\x00\x3D\xCA\x92\x18\x19\x3D\xCA\x92\x18\x23\x3D\xCA\x92\x18\x23\x3D\xCA\x92\x18\x23\x3D\xCA\x92\x18\x11\xB3\xFF\x19\x70\x3D\xCA" +
"\x92\x18\x23\x71\x3D\xCA\x92\x18\x11\xB3\xFF\x19\x70\x3D\xCA\x92\x18\x23\x71\x3D\xCA\x92\x18\x11\xB3\xFF\x19\x70\x3D\xCA\x92\x18" +
"\x23\x71\xF5\x3A\x17\x16\xCD\xC1\x15\xFE\x2A\xCC\x28\x16\xF1\x3D\xCA\x92\x18\x23\xF5\x3A\x17\x16\xCD\xD6\x15\xF1\x3D\xCA\x92\x18" +
"\x23\xF5\x3A\x17\x16\xCD\xE4\x15\xF1\x3D\xCA\x92\x18\x23\xF5\x3A\x17\x16\xCD\xF2\x15\xF1\x3D\xCA\x92\x18\x23\xF5\x3A\x17\x16\xCD" +
"\x00\x16\xF1\x3D\xCA\x92\x18\x23\x70\x23\x36\x00\x3D\xCA\x92\x18\x11\x4E\x00\x19\x71\x3D\xCA\x92\x18\x23\x70\x23\x36\x00\x3D\xCA" +
"\x92\x18\x19\x71\x3D\xCA\x92\x18\x23\x70\x23\x36\x00\x3D\xCA\x92\x18\x19\x71\x3D\xCA\x92\x18\x23\x3D\xCA\x92\x18\x11\xB3\xFF\x19" +
"\x70\x3D\xCA\x92\x18\x23\x71\x3D\xCA\x92\x18\x11\xB3\xFF\x19\x70\x3D\xCA\x92\x18\x23\x71\xF5\x3A\x18\x16\xCD\xC1\x15\xFE\x2A\xCC" +
"\x31\x16\xF1\x3D\xCA\x92\x18\x23\xF5\x3A\x18\x16\xCD\xD6\x15\xF1\x3D\xCA\x92\x18\x23\xF5\x3A\x18\x16\xCD\xE4\x15\xF1\x3D\xCA\x92" +
"\x18\x23\xF5\x3A\x18\x16\xCD\xF2\x15\xF1\x3D\xCA\x92\x18\x23\xF5\x3A\x18\x16\xCD\x00\x16\xF1\x3D\xCA\x92\x18\x23\x70\x23\x36\x00" +
"\x3D\xCA\x92\x18\x11\x4E\x00\x19\x71\x3D\xCA\x92\x18\x23\x70\x3D\xCA\x92\x18\x23\x3D\xCA\x92\x18\x23\x71\x3D\xCA\x92\x18\x23\x3D" +
"\xCA\x92\x18\x23\x3D\xCA\x92\x18\x23\x3D\xCA\x92\x18\x11\xB3\xFF\x19\x70\x3D\xCA\x92\x18\x23\x71\x3D\xCA\x92\x18\x11\xB3\xFF\x19" +
"\x70\x3D\xCA\x92\x18\x23\x71\xF5\x3A\x19\x16\xCD\xC1\x15\xFE\x2A\xCC\x3A\x16\xF1\x3D\xCA\x92\x18\x23\xF5\x3A\x19\x16\xCD\xD6\x15" +
"\xF1\x3D\xCA\x92\x18\x23\xF5\x3A\x19\x16\xCD\xE4\x15\xF1\x3D\xCA\x92\x18\x23\xF5\x3A\x19\x16\xCD\xF2\x15\xF1\x3D\xCA\x92\x18\x23" +
"\xF5\x3A\x19\x16\xCD\x00\x16\xF1\x3D\xCA\x92\x18\x23\x70\x23\x36\x00\x3D\xCA\x92\x18\x11\x4E\x00\x19\x71\x3D\xCA\x92\x18\x23\x70" +
"\x23\x36\x00\x19\x71\x23\x36\x00\x3D\xCA\x92\x18\x19\x71\x3D\xCA\x92\x18\x23\x3D\xCA\x92\x18\x23\x70\x3D\xCA\x92\x18\x23\x71\x3D" +
"\xCA\x92\x18\x11\xB3\xFF\x19\x70\x3D\xCA\x92\x18\x23\x71\x3D\xCA\x92\x18\x23\x3D\xCA\x92\x18\x23\xF5\x3A\x1A\x16\xCD\xC1\x15\xFE" +
"\x2A\xCC\x43\x16\xF1\x3D\xCA\x92\x18\x23\xF5\x3A\x1A\x16\xCD\xD6\x15\xF1\x3D\xCA\x92\x18\x23\xF5\x3A\x1A\x16\xCD\xE4\x15\xF1\x3D" +
"\xCA\x92\x18\x23\xF5\x3A\x1A\x16\xCD\xF2\x15\xF1\x3D\xCA\x92\x18\x23\xF5\x3A\x1A\x16\xCD\x00\x16\xF1\x3D\xCA\x92\x18\x23\x3D\xCA" +
"\x92\x18\x23\x3D\xCA\x92\x18\x23\x70\x23\x36\x00\x3D\xCA\x92\x18\x11\x4E\x00\x19\x71\x23\x36\x00\x3D\xCA\x92\x18\x19\x71\x3D\xCA" +
"\x92\x18\x23\x3D\xCA\x92\x18\x23\x3D\xCA\x92\x18\x23\x3D\xCA\x92\x18\x23\x3D\xCA\x92\x18\x11\xB3\xFF\x19\x70\x3D\xCA\x92\x18\x23" +
"\x71\x3D\xCA\x92\x18\x11\xB3\xFF\x19\x70\x3D\xCA\x92\x18\x23\x71\x3D\xCA\x92\x18\x11\xB3\xFF\x19\x70\x3D\xCA\x92\x18\x23\x71\x3D" +
"\xCA\x92\x18\x23\xF5\x3A\x1B\x16\xCD\xC1\x15\xFE\x2A\xCC\x4C\x16\xF1\x3D\xCA\x92\x18\x23\xF5\x3A\x1B\x16\xCD\xD6\x15\xF1\x3D\xCA" +
"\x92\x18\x23\xF5\x3A\x1B\x16\xCD\xE4\x15\xF1\x3D\xCA\x92\x18\x23\xF5\x3A\x1B\x16\xCD\xF2\x15\xF1\x3D\xCA\x92\x18\x23\xF5\x3A\x1B" +
"\x16\xCD\x00\x16\xF1\x3D\xCA\x92\x18\x23\x70\x23\x36\x00\x3D\xCA\x92\x18\x11\x4E\x00\x19\x71\x3D\xCA\x92\x18\x23\x70\x3D\xC3\x50" +
"\x1D\x71\xF5\x3A\x1C\x16\xCD\xC1\x15\xFE\x2A\xCC\x55\x16\xF1\x3D\xCA\x92\x18\x23\xF5\x3A\x1C\x16\xCD\xD6\x15\xF1\x3D\xCA\x92\x18" +
"\x23\xF5\x3A\x1C\x16\xCD\xE4\x15\xF1\x3D\xCA\x92\x18\x23\xF5\x3A\x1C\x16\xCD\xF2\x15\xF1\x3D\xCA\x92\x18\x23\xF5\x3A\x1C\x16\xCD" +
"\x00\x16\xF1\x3D\xCA\x92\x18\x23\x3D\xCA\x92\x18\x11\xB3\xFF\x19\x70\x3D\xCA\x92\x18\x23\x71\x3D\xCA\x92\x18\x23\xF5\x3A\x1D\x16" +
"\xCD\xC1\x15\xFE\x2A\xCC\x5E\x16\xF1\x3D\xCA\x92\x18\x23\xF5\x3A\x1D\x16\xCD\xD6\x15\xF1\x3D\xCA\x92\x18\x23\xF5\x3A\x1D\x16\xCD" +
"\xE4\x15\xF1\x3D\xCA\x92\x18\x23\xF5\x3A\x1D\x16\xCD\xF2\x15\xF1\x3D\xCA\x92\x18\x23\xF5\x3A\x1D\x16\xCD\x00\x16\xF1\x3D\xCA\x92" +
"\x18\x23\x3D\xCA\x92\x18\x23\x70\x3D\xCA\x92\x18\x23\x36\x00\x11\x4E\x00\x19\x71\x3D\xCA\x92\x18\x23\x70\x3D\xCA\x92\x18\x23\x36" +
"\x00\x19\x71\x3D\xCA\x92\x18\x23\x3D\xCA\x92\x18\x23\x3D\xCA\x92\x18\x23\x3D\xCA\x92\x18\x11\xB3\xFF\x19\x70\x3D\xCA\x92\x18\x23" +
"\x71\x3D\xCA\x92\x18\x23\xF5\x3A\x1E\x16\xCD\xC1\x15\xFE\x2A\xCC\x67\x16\xF1\x3D\xCA\x92\x18\x23\xF5\x3A\x1E\x16\xCD\xD6\x15\xF1" +
"\x3D\xCA\x92\x18\x23\xF5\x3A\x1E\x16\xCD\xE4\x15\xF1\x3D\xCA\x92\x18\x23\xF5\x3A\x1E\x16\xCD\xF2\x15\xF1\x3D\xCA\x92\x18\x23\xF5" +
"\x3A\x1E\x16\xCD\x00\x16\xF1\x3D\xCA\x92\x18\x23\x70\x23\x36\x00\x3D\xCA\x92\x18\x11\x4E\x00\x19\x71\x3D\xCA\x92\x18\x23\xC3\xFA" +
"\x10\xB7\xC0\xE5\x11\xB2\xFF\x19\x36\x6F\x19\x7E\x36\x00\xFE\x2A\xD1\xC8\x36\x3D\xEB\xC9\xB7\xC0\xE5\x11\xB2\xFF\x19\x36\x6F\x19" +
"\x36\x3D\xE1\xC9\xB7\xC0\xE5\x11\xB2\xFF\x19\x36\x6F\x19\x36\x17\xE1\xC9\xB7\xC0\xE5\x11\xB2\xFF\x19\x36\x6F\x19\x36\x17\xE1\xC9" +
"\xB7\xC0\xE5\x11\xB2\xFF\x19\x36\x6F\x23\x36\x00\x19\x36\x00\x2B\x36\x13\xE1\xC9\x00\x00\xFF\xFF\xFF\xFF\x00\xFF\xFF\xFF\xFF\x3E" +
"\xFF\x32\x16\x16\xCD\x70\x16\xC9\x3E\xFF\x32\x17\x16\xCD\x70\x16\xC9\x3E\xFF\x32\x18\x16\xCD\x70\x16\xC9\x3E\xFF\x32\x19\x16\xCD" +
"\x70\x16\xC9\x3E\xFF\x32\x1A\x16\xCD\x70\x16\xC9\x3E\xFF\x32\x1B\x16\xCD\x70\x16\xC9\x3E\xFF\x32\x1C\x16\xCD\x70\x16\xC9\x3E\xFF" +
"\x32\x1D\x16\xCD\x70\x16\xC9\x3E\xFF\x32\x1E\x16\xCD\x70\x16\xC9\xC3\xC0\x1E\x00\x00\x19\xAF\x77\x23\x77\x23\x77\x23\x77\x23\x77" +
"\xE1\x23\x23\x23\xCD\xE9\x1A\xCD\xFB\x19\xE1\xC9\x2A\x17\xFA\x10\xC4\x7E\x00\x11\xC4\x7E\x06\x11\xC4\x7E\x0F\x11\x76\x7E\x15\x11" +
"\x76\x7E\x1E\x11\x28\x7E\x24\x11\x28\x7E\x37\x11\x28\x7E\x44\x11\x28\x7E\x51\x11\x28\x7E\x5E\x11\x28\x7E\x6B\x11\x28\x7E\x77\x11" +
"\x76\x7E\x7D\x11\x76\x7E\x86\x11\xC4\x7E\x8B\x11\xC4\x7E\x90\x11\xC4\x7E\x95\x11\xC4\x7E\x9D\x11\x76\x7E\xA3\x11\x76\x7E\xAC\x11" +
"\x28\x7E\xB2\x11\x28\x7E\xBB\x11\xDA\x7D\xC1\x11\xDA\x7D\xD4\x11\xDA\x7D\xE1\x11\xDA\x7D\xEE\x11\xDA\x7D\xFB\x11\xDA\x7D\x08\x12" +
"\xDA\x7D\x14\x12\x28\x7E\x1A\x12\x28\x7E\x23\x12\x76\x7E\x29\x12\x76\x7E\x32\x12\xC4\x7E\x38\x12\xC4\x7E\x40\x12\x76\x7E\x46\x12" +
"\x76\x7E\x4F\x12\x28\x7E\x55\x12\x28\x7E\x68\x12\x28\x7E\x75\x12\x28\x7E\x82\x12\x28\x7E\x8F\x12\x28\x7E\x9C\x12\x28\x7E\xA8\x12" +
"\x76\x7E\xAE\x12\x76\x7E\xB4\x12\x76\x7E\xB9\x12\x76\x7E\xBF\x12\x76\x7E\xC4\x12\x76\x7E\xC9\x12\x76\x7E\xD1\x12\x28\x7E\xD7\x12" +
"\x28\x7E\xE0\x12\xDA\x7D\xE6\x12\xDA\x7D\xF9\x12\xDA\x7D\x06\x13\xDA\x7D\x13\x13\xDA\x7D\x20\x13\xDA\x7D\x2D\x13\xDA\x7D\x39\x13" +
"\x28\x7E\x3F\x13\x28\x7E\x44\x13\x76\x7E\x4D\x13\xC4\x7E\x53\x13\xC4\x7E\x58\x13\xC4\x7E\x5E\x13\xC4\x7E\x67\x13\x76\x7E\x6D\x13" +
"\x76\x7E\x73\x13\x76\x7E\x78\x13\x76\x7E\x8A\x13\x76\x7E\x97\x13\x76\x7E\xA4\x13\x76\x7E\xB1\x13\x76\x7E\xBE\x13\x76\x7E\xC3\x13" +
"\x76\x7E\xC8\x13\x76\x7E\xD4\x13\xC4\x7E\xDD\x13\x12\x7F\xE3\x13\x12\x7F\xE8\x13\x12\x7F\xED\x13\x12\x7F\xF2\x13\x12\x7F\xFA\x13" +
"\xC4\x7E\x00\x14\xC4\x7E\x09\x14\x76\x7E\x0F\x14\x76\x7E\x18\x14\x28\x7E\x1E\x14\x28\x7E\x24\x14\x28\x7E\x36\x14\x28\x7E\x43\x14" +
"\x28\x7E\x50\x14\x28\x7E\x5D\x14\x28\x7E\x6A\x14\x28\x7E\x76\x14\x76\x7E\x7C\x14\x76\x7E\x81\x14\x76\x7E\x94\x14\x76\x7E\xA1\x14" +
"\x76\x7E\xAE\x14\x76\x7E\xBB\x14\x76\x7E\xC8\x14\x76\x7E\xD0\x14\x28\x7E\xD6\x14\x28\x7E\xDC\x14\x28\x7E\xEE\x14\x28\x7E\xFB\x14" +
"\x28\x7E\x08\x15\x28\x7E\x15\x15\x28\x7E\x22\x15\x28\x7E\x27\x15\x28\x7E\x33\x15\x76\x7E\x39\x15\x76\x7E\x42\x15\xC4\x7E\x48\x15" +
"\xC4\x7E\x4D\x15\xC4\x7E\x52\x15\xC4\x7E\x5A\x15\x76\x7E\x60\x15\x76\x7E\x66\x15\x76\x7E\x78\x15\x76\x7E\x85\x15\x76\x7E\x92\x15" +
"\x76\x7E\x9F\x15\x76\x7E\xAC\x15\x76\x7E\xB8\x15\xC4\x7E\x00\x00\xFF\xFF\x21\x12\x7F\x11\xB2\xFF\x3E\x07\x06\x17\x70\x3D\xC3\x58" +
"\x1D\x21\xA6\x19\x35\x7E\xB7\xC2\xCB\x18\x36\x0B\x21\xFC\x77\x34\x7E\xFE\x3A\xC2\xCB\x18\x36\x30\x2B\x34\x7E\xFE\x36\xC2\xCB\x18" +
"\x36\x30\x2B\x2B\x34\x7E\xFE\x32\xCA\xC0\x1A\x2A\xAE\x19\x7E\xFE\x29\xC2\x0B\x1A\x2B\x2B\x2B\x2B\x2B\x7E\xFE\x06\xC2\x0B\x1A\x3A" +
"\xA4\x19\xB7\xC2\x16\x19\x21\xAA\x19\x35\xC2\x7B\x19\x3A\xA9\x19\x32\xAA\x19\x21\xAB\x19\x35\xE2\x7B\x19\x3E\xFF\x32\xA4\x19\x2A" +
"\xAE\x19\x23\x23\x00\x11\xB3\xFF\x19\x19\x7E\xB7\xCA\x09\x19\x11\x4D\x00\x19\x22\xAC\x19\x2A\xAC\x19\x36\x00\x2B\x36\x00\x11\x4E" +
"\x00\x19\x22\xAC\x19\x7C\xFE\x7D\xC2\x35\x19\x11\xB2\xFF\x2A\xAC\x19\x19\x22\xAC\x19\x2A\xAC\x19\x7E\xFE\x17\xCA\xEE\x19\xFE\x14" +
"\xCA\xEE\x19\xFE\x03\xCA\xEE\x19\xFE\x3D\xCA\xEE\x19\xFE\x2A\xCA\xDE\x19\xB7\xC2\x0B\x1A\x2B\x7E\xFE\x03\xCA\xEE\x19\xFE\x14\xCA" +
"\xEE\x19\xFE\x17\xCA\xEE\x19\xFE\x6F\xCA\xEE\x19\xFE\x2A\xCA\xDE\x19\xB7\xC2\x0B\x1A\x23\x36\x15\x2B\x36\x16\x3A\xA5\x19\xB7\xCA" +
"\x03\x10\x2A\xB0\x19\x06\x03\x36\x00\x23\x7E\x4F\xB7\xC2\xB4\x19\x36\x2A\x05\xC2\x87\x19\x22\xB0\x19\xC3\x03\x10\x1E\x3F\xCD\xB8" +
"\x1A\xE1\x0E\x4E\x00\x00\x0B\x19\x2C\x06\x03\xDD\xFF\x7C\xFA\x7D\xFA\x7D\x18\x18\xAF\x32\xA5\x19\x79\xFE\x16\xCA\xDE\x19\x2B\x36" +
"\x2A\xFE\x3D\xCA\x03\x10\x36\x2B\xE5\x21\x02\xDC\x46\x36\x04\x36\x04\x0E\x07\xCD\x09\xF8\x70\x70\xE1\x36\x00\xC3\x03\x10\xCD\xE9" +
"\x1A\xCD\xFB\x19\xCD\xFB\x19\xAF\x32\xA4\x19\xC3\x03\x10\xAF\x32\xA4\x19\x3A\xB3\x19\x32\xB2\x19\xC3\x03\x10\xE5\x21\xD3\x77\x36" +
"\x30\x2B\x34\x7E\xFE\x3A\xCA\xFF\x19\xE1\xC9\x2A\xAE\x19\x2B\x2B\xCD\xE9\x1A\x06\x07\x0E\x40\xCD\x60\x1D\xFE\x0D\xCA\xC0\x1A\x0D" +
"\xC2\x17\x1A\x05\xC2\x15\x1A\xC3\x0B\x1A\x21\x6F\x1C\xC3\xEB\x1D\x06\x05\x04\xCD\x60\x1D\xFE\xFF\xC3\x44\x1A\x78\xFE\x58\xCA\x30" +
"\x1A\xC3\x32\x1A\x78\x32\xA9\x19\x32\xAA\x19\x3E\xFF\x32\x02\xDC\x3E\x21\x32\x02\xDC\x32\x02\xDC\x06\xFF\x00\x05\xC2\x5A\x1A\x3D" +
"\xC2\x52\x1A\xAF\x32\x02\xDC\x21\x16\x16\x06\x09\x77\x23\x05\xC2\x6C\x1A\x32\xA5\x19\x32\xA4\x19\x3D\x32\xA8\x19\x3E\x21\x32\xA7" +
"\x19\x21\xB3\x7C\x22\xAE\x19\x0E\x1F\xC3\x50\x1E\x21\xC2\x77\xE5\x01\x01\x00\x1E\x3F\xCD\xB8\x1A\xE5\x21\x12\x7F\x1E\x3F\xCD\xB8" +
"\x1A\xE1\x0E\x4E\x1E\x19\xCD\xB8\x1A\xE1\x1E\x19\xCD\xB8\x1A\x21\x48\x1C\xCD\x18\xF8\xC3\x03\x10\x36\x17\x09\x1D\xC2\xB8\x1A\xC9" +
"\x21\x2E\x1D\xAF\x32\x02\xDC\xCD\x18\xF8\xCD\x03\xF8\xCD\x03\xF8\x3E\x2C\x16\xFF\x32\x02\xDC\x32\x02\xDC\x15\xC2\xD4\x1A\x3D\xC2" +
"\xD2\x1A\xAF\x32\x02\xDC\xC3\x00\x10\xAF\x32\xA5\x19\x3D\x32\x02\xDC\x3E\x01\x32\x02\xDC\x32\x02\xDC\x36\x0B\x11\xB2\xFF\x19\x36" +
"\x0F\x2B\x36\x05\x11\x4E\x00\x19\x36\x12\x23\x23\x36\x05\x06\x80\x00\x05\xC2\x10\x1B\x3C\x32\x02\xDC\x32\x02\xDC\xFE\x0A\xC2\x0E" +
"\x1B\x11\xB2\xFF\x19\x36\x12\x19\x23\x36\x10\x11\x4E\x00\x19\x19\x36\x03\x19\x36\x05\x2B\x2B\x2B\x2B\x36\x12\x11\xB2\xFF\x19\x36" +
"\x03\x19\x19\x36\x04\x06\xFF\x00\x05\xC2\x47\x1B\x3C\x32\x02\xDC\x32\x02\xDC\xFE\x14\xC2\x45\x1B\x11\x4E\x00\x19\x2B\x36\x05\x2B" +
"\x36\x03\x19\x19\x36\x03\xD5\x11\xB2\xFF\x19\x23\x36\x12\x23\x23\x23\x23\x23\x23\x36\x05\x19\x36\x12\x23\x36\x03\xD1\x19\x19\x36" +
"\x03\x2B\x2B\x2B\x2B\x06\xFF\x00\x05\xC2\x87\x1B\x3C\x32\x02\xDC\x32\x02\xDC\xFE\x1E\xC2\x85\x1B\x11\xB2\xFF\x19\x36\x00\x11\xB2" +
"\xFF\x19\x36\x00\x2B\x36\x00\x11\x4E\x00\x19\x36\x00\x23\x23\x36\x00\x06\xFF\x00\x05\xC2\xB3\x1B\x3C\x32\x02\xDC\x32\x02\xDC\xFE" +
"\x28\xC2\xB1\x1B\x11\xB2\xFF\x19\x36\x00\x19\x23\x36\x00\x11\x4E\x00\x19\x19\x36\x00\x19\x36\x00\x2B\x2B\x2B\x2B\x36\x00\x11\xB2" +
"\xFF\x19\x36\x00\x19\x19\x36\x00\x06\xFF\x00\x05\xC2\xEA\x1B\x3C\x32\x02\xDC\x32\x02\xDC\xFE\x32\xC2\xE8\x1B\x11\x4E\x00\x19\x2B" +
"\x36\x00\x2B\x36\x00\x19\x19\x36\x00\xD5\x11\xB2\xFF\x19\x23\x36\x00\x23\x23\x23\x23\x23\x23\x36\x00\x19\x36\x00\x23\x36\x00\xD1" +
"\x19\x19\x36\x00\x2B\x2B\x2B\x2B\x06\xFF\x00\x05\xC2\x2A\x1C\x3C\x32\x02\xDC\x32\x02\xDC\xFE\x3C\xC2\x28\x1C\xAF\x32\x02\xDC\x3E" +
"\x05\x32\x02\xDC\x32\x02\xDC\xC9\x20\x1B\x59\x20\x27\x20\x6F\x7E\x6B\x69\x3A\x20\x30\x30\x30\x30\x20\x1B\x59\x20\x4F\x20\x77\x72" +
"\x65\x6D\x71\x3A\x20\x30\x20\x30\x30\x20\x0D\x08\x00\x38\x20\x1F\x1B\x59\x28\x30\x69\x20\x67\x20\x72\x20\x61\x20\x20\x20\x20\x20" +
"\x20\x20\x20\x22\x20\x73\x20\x74\x20\x7C\x20\x6C\x20\x62\x20\x69\x20\x22\x1B\x59\x2A\x39\x20\x31\x39\x38\x38\x20\x67\x2E\x1B\x59" +
"\x32\x20\x64\x77\x69\x76\x65\x6E\x69\x65\x20\x20\x2D\x20\x6B\x6C\x61\x77\x69\x7B\x69\x20\x75\x70\x72\x61\x77\x6C\x65\x6E\x69\x71" +
"\x20\x6B\x75\x72\x73\x6F\x72\x6F\x6D\x20\x0D\x0A\x0A\x77\x79\x73\x74\x72\x65\x6C\x20\x20\x20\x2D\x20\x70\x72\x6F\x62\x65\x6C\x20" +
"\x0D\x0A\x0A\x6E\x6F\x77\x61\x71\x20\x69\x67\x72\x61\x2D\x20\x77\x6B\x20\x00\x65\x77\x20\x73\x2E\x77\x2E\x20\x2B\x20\x53\x54\x46" +
"\x24\x24\x24\x24\x24\x24\x24\x24\x24\x24\x24\x24\x24\x24\x24\x24\x24\x0C\x08\x00\x1B\x59\x20\x27\x30\x30\x30\x30\x1B\x59\x20\x50" +
"\x77\x72\x65\x6D\x71\x3A\x20\x30\x20\x30\x30\x0D\x08\x00\x1B\x59\x29\x38\x69\x67\x72\x61\x20\x6F\x6B\x6F\x6E\x7E\x65\x6E\x61\x20" +
"\x2E\x0C\x08\x00\x70\x19\x3D\xC2\x44\x1D\xC3\xA1\x18\x12\xFF\x12\xCA\x92\x18\x23\xC3\x81\x14\x12\x19\xB7\xC2\x9C\x18\xC3\xA1\x18" +
"\xC3\x1B\xF8\x02\xFF\x11\x00\x02\xCD\x60\x1D\xFE\xFF\xCD\x20\x1F\x1B\x7A\xB3\xC2\x6D\x1D\xC3\x10\x10\x02\xCD\x86\x1D\x1B\x7A\xB3" +
"\xC2\x7A\x1D\xC3\x10\x10\x3E\x10\x3D\xC2\x88\x1D\xC9\x00\xFF\x00\xCD\x60\x1D\xFE\x19\xC2\x9E\x1D\x11\xB2\xFF\xC3\x74\x10\xFE\x1A" +
"\xC2\xA9\x1D\x11\x4E\x00\xC3\x74\x10\xFE\x08\xC2\xB4\x1D\x11\xFF\xFF\xC3\x74\x10\xFE\x18\xC2\xBF\x1D\x11\x01\x00\xC3\x74\x10\xFE" +
"\x20\xCA\x49\x10\xFE\xFF\xCA\x6B\x10\xC3\x71\x10\xFF\x12\xFF\x12\x2A\xAE\x19\x7E\xFE\x00\xC2\x0B\x1A\x2B\x2B\x2B\x2B\x2B\x7E\xFE" +
"\x17\xCA\x0B\x1A\x00\x00\x00\xC3\x90\x1E\xFF\xCD\x18\xF8\x00\x00\x3E\x23\x32\x02\x19\x21\x30\x1E\xCD\x18\xF8\xCD\x03\xF8\xFE\x33" +
"\xCA\x0D\x1E\xFE\x32\xCA\x0D\x1E\xFE\x31\xC2\xFB\x1D\x32\x5E\x1E\xD6\x30\x32\x67\x1D\xFE\x01\xC2\x30\x1A\xAF\x32\x02\x19\xC3\x30" +
"\x1A\x00\xFF\x00\xFF\x00\xFF\x00\xFF\x00\xFF\x00\xFF\x00\xFF\x00\x0D\x0A\x0A\x75\x72\x6F\x77\x65\x6E\x78\x20\x28\x31\x2C\x32\x2C" +
"\x33\x29\x3A\x20\x20\x00\xFF\x00\xFF\x00\xFF\x00\xFF\x00\xFF\x00\xCD\x09\xF8\x21\x60\x1E\xCD\x18\xF8\xC3\x86\x1E\x00\x3A\x32\x01" +
"\x1B\x59\x30\x20\x17\x17\x73\x74\x7C\x6C\x62\x69\x17\x17\x17\x0A\x0D\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17" +
"\x17\x17\x17\x17\x0C\x00\x3E\x09\x32\x5F\x1E\xC3\x8C\x1A\x00\x3A\x01\xB3\xFF\x09\x7E\xFE\x00\xC2\x0B\x1A\x2A\xAE\x19\xC3\xAB\x10" +
"\x3A\x5F\x1E\x3D\x32\x5F\x1E\xB7\xC2\x8C\x1D\x3A\x5E\x1E\x3D\xFE\x30\xC2\xFE\x1D\x0E\x07\x3E\x09\xCD\x09\xF8\xC3\xB4\x1E\x00\x3A" +
"\xD5\xE5\x11\x4E\x00\xCD\xA0\x1E\xC3\x75\x16\x2E\x08\x26\x78\xE9\x06\x05\x04\xCD\x60\x1D\xFE\xFF\xC3\x44\x1A\x78\xFE\x58\xCA\x30" +
"\x1A\xC3\x32\x1A\x78\x32\xA9\x19\x32\xAA\x19\x3E\xFF\x32\x02\xDC\x3E\x21\x32\x02\xDC\x32\x02\xDC\x06\xFF\x00\x05\xC2\x5A\x1A\x3D" +
"\xC2\x52\x1A\xAF\x32\x02\xDC\x21\x16\x16\x06\x09\x77\x23\x05\xC2\x6C\x1A\x32\xA5\x19\x32\xA4\x19\x3D\x32\xA8\x19\x3E\x21\x32\xA7" +
"\x01\x0A\x00\x0B\x78\xB1\xC2\x23\x1F\xC9\x00\x00\x3D\xC2\x22\x1F\xC9\x01\x00\x1E\x3F\xCD\xB8\x1A\xE5\x21\x12\x7F\x1E\x3F\xCD\xB8" +
"\x1A\xE1\x0E\x4E\x1E\x19\xCD\xB8\x1A\xE1\x1E\x19\xCD\xB8\x1A\x21\x48\x1C\xCD\x18\xF8\xC3\x03\x10\x36\x17\x09\x1D\xC2\xB8\x1A\xC9" +
"\x21\x2E\x1D\xAF\x32\x02\xDC\xCD\x18\xF8\xCD\x03\xF8\xCD\x03\xF8\x3E\x2C\x16\xFF\x32\x02\xDC\x32\x02\xDC\x15\xC2\xD4\x1A\x3D\xC2" +
"\xD2\x1A\xAF\x32\x02\xDC\xC3\x00\x10\xAF\x32\xA5\x19\x3D\x32\x02\xDC\x3E\x01\x32\x02\xDC\x32\x02\xDC\x36\x0B\x11\xB2\xFF\x19\x36" +
"\x0F\x2B\x36\x05\x11\x4E\x00\x19\x36\x12\x23\x23\x36\x05\x06\xFF\x00\x05\xC2\x10\x1B\x3C\x32\x02\xDC\x32\x02\xDC\xFE\x0A\xC2\x0E" +
"\x1B\x11\xB2\xFF\x19\x36\x12\x19\x23\x36\x10\x11\x4E\x00\x19\x19\x36\x03\x19\x36\x05\x2B\x2B\x2B\x2B\x36\x12\x11\xB2\xFF\x19\x36" +
"\x03\x19\x19\x36\x04\x06\xFF\x00\x05\xC2\x47\x1B\x3C\x32\x02\xDC\x32\x02\xDC\xFE\x14\xC2\x45\x1B\x11\x4E\x00\x19\x2B\x36\x05\x2B" +
"\x21\x00\x00\x4E\x36\xC9\xC7\x71\x3B\x3B\xE1\x11\x07\x00\x7D\x93\x4F\x7C\x9A\x47\xE5\x11\xA5\x00\x19\x3E\x0F\x5E\x23\x56\xEB\x09" +
"\xEB\x72\x2B\x73\x23\x23\xE5\xEB\x23\x5E\x23\x56\xEB\x09\xEB\x72\x2B\x73\xE1\x3D\xC2\x1B\x00\xE1\x22\x0C\x00\x3A\x3A\x76\xFE\xC9" +
"\xC2\xD0\x00\x21\x4C\x7F\x11\x51\x7F\x01\xB7\x77\x7E\x12\x2B\x1B\x7C\xB8\xC2\x4C\x00\x7D\xB9\xC2\x4C\x00\x3E\xC3\x32\x3A\x76\x21" +
"\x6B\x00\x22\x3B\x76\xCD\x92\x00\xC3\xD0\x00\xF5\x3A\x0C\x76\xFE\xFF\xCA\x85\x00\xB7\xC2\x83\x00\x79\xFE\x1F\xCA\x85\x00\xFE\x0C" +
"\xCA\x85\x00\xF1\xC9\xF1\x22\xAA\x00\x21\x92\x00\xE3\xE5\x2A\xAA\x00\xC9\xE5\x2A\x00\x76\x23\x23\x23\x23\x23\x22\x00\x76\x21\xD3" +
"\x76\x36\xFF\x21\xD5\x76\x36\x8C\xE1\xC9\x00\x00\x34\x00\x38\x00\x52\x00\x57\x00\x5F\x00\x75\x00\x71\x00\x7B\x00\x80\x00\x65\x00" +
"\x89\x00\x86\x00\x8E\x00\x40\x00\x68\x00\x00\x00\x00\x00\x00\x00\xC3\x2A\x1A\x76\x76\x76\x76\x76\x76\x76\x76\x76\x76\x76\x76\x76"};
ui.file_loaded(file);
}
tape_file();
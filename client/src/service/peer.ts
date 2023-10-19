class PeerService {
  peer: RTCPeerConnection;

  constructor() {
    this.peer = new RTCPeerConnection({
      iceServers: [
        {
          urls: [
            "stun:stun.l.google.com:19302",
            "stun:stun2.l.google.com:19302",
          ],
        },
      ],
    });
  }

  async getAnswer(offer: RTCSessionDescriptionInit) {
    if (this.peer) {
      try {
        await this.peer.setRemoteDescription(new RTCSessionDescription(offer));
        const ans = await this.peer.createAnswer();
        await this.peer.setLocalDescription(ans);
        return ans;
      } catch (err) {
        console.log(err);
      }
    }
  }

  async getOffer() {
    console.log("get offer called")
    if (this.peer) {
    
      try {
        const offer = await this.peer.createOffer();
        await this.peer.setLocalDescription(offer); 
        return offer;
      } catch (err) {
        console.log(err);
      }
    }
  }

  async setLocalDescription(ans: RTCSessionDescriptionInit) {
    if (this.peer) {
      try {
        await this.peer.setRemoteDescription(new RTCSessionDescription(ans));
      } catch (err) {
        console.log(err);
      }
    }
  }
}

export default new PeerService();

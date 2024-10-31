FROM quay.io/gurusensei/gurubhay:latest

RUN git clone https://github.com/Gmaxhacker1/GCYBER-Md-v1 /root/gmax

WORKDIR /root/gmax/

RUN npm install --platform=linuxmusl

EXPOSE 5000

CMD ["npm", "start"]

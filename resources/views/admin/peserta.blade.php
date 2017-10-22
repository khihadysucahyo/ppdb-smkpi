@extends('layouts.dash_admin')

@section('konten')

<div class="col s12 m12 l9">

  <div class="row">
    <div class="col s11">

      {{-- <hr> --}}
      <div class="row">
        <div class="col m2 s12">
          <h5 class="">Calon Peserta</h5>
        </div>
        <form class="form-horizontal" role="form" method="get" action="_peserta" >
          {{-- {{ csrf_field() }} --}}
              <div class="input-field col m3 s10" style="height:50px;">
                <input  placeholder="no.peserta/nama/asal sekolah" required id="disabled" type="text" name="search">
              </div>
              <div class=" input-field  col m1 s2">
                <button type="submit" class="btn btn-primary indigo z-depth-3"><i class="material-icons">search</i></button>
              </div>
        </form>
        <form class="form-horizontal" role="form" method="post" action="/peserta">{{ csrf_field() }}
              <div class="input-field offset-m1 col m3 s10">
                <select class="browser-default">
                  <option value="" disabled selected>Pilih Aksi</option>
                  <option value="1">Hapus</option>
                  <option value="2">Status diterima: Lulus</option>
                  <option value="2">Status diterima: Tidak Lulus(default)</option>
                </select>
              </div>
              <div class="input-field col m1 s2">
                <button type="submit" class="btn btn-primary indigo z-depth-3">Apply</button>
              </div>
        {{-- </form> --}}
      </div><hr>
      <table class="striped highlight">
         <thead>
           <tr>
               <th></th>
               <th>No Peserta</th>
               <th>Nama</th>
               <th>Asal Sekolah</th>
               <th>Status Biodata</th>
               <th>Status Verifikasi</th>
               <th style="text-align:center;">Tools</th>
           </tr>
         </thead>
         {{-- <form class="form-horizontal" role="form" action="" method="post"> --}}
         <tbody>
           @php $i=0; @endphp
           @foreach ($users as $user)
             @if ($user->user_id==$user->user->id && $user->user->role==1)
               <tr>
                 <td class="center"><input type="checkbox" value="{{$user->user_id}}" name="id[{{$i}}]" id="cek{{$user->user_id}}"><label for="cek{{$user->user_id}}"></label></td>
                 <td>{{$user->no_peserta}}</td>
                 <td>{{$user->nama}}</td>
                 <td>{{$user->asal_sekolah}}</td>
                 <td>{{$user->status_biodata}}</td>
                 <td>{{$user->status_verifikasi}}</td>
                 <td>
                   <a href="edit/{{$user->user_id}}"><i class="material-icons black-text">mode_edit</i></a>
                   <a href="hapus/{{$user->user_id}}" onclick="return confirm('hapus peserta {{$user->nama}}?')">
                     <i class="material-icons black-text">delete_forever</i>
                   </a>
                   <a href="cetakform/{{$user->user_id}}"><i class="material-icons black-text">print</i></a>
                 </td>
               </tr>
               @php $i++; @endphp
             @endif
           @endforeach
         </tbody>
       </table>
       </form>
       {{$users->links('vendor.pagination.default')}}
    </div>


  </div>
</div>
@endsection
